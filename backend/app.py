from flask import Flask, request, jsonify
import requests
import heapq
from flask_cors import CORS  # Import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Constants for APIs
JOOBLE_API_KEY = "1d6d28da-a887-4f3b-827a-8b3c920a4af9"
ADZUNA_APP_ID = "234d273a"
ADZUNA_APP_KEY = "f07afbdff9b52013f951fbf31fc19c76"
ADZUNA_COUNTRY = "in"

# Fetch Jooble jobs
def fetch_jooble_jobs(query, location):
    url = f"https://jooble.org/api/{JOOBLE_API_KEY}"
    payload = {
        "keywords": query or "tech",
        "location": location or "India",
    }
    response = requests.post(url, json=payload)

    if response.status_code != 200:
        return []  # Return empty list if the response is not successful

    data = response.json()

    # Check if the response contains jobs
    if "jobs" not in data:
        return []

    return [
        {
            "title": job["title"],
            "company": job["company"],
            "location": job["location"],
            "salary": int(job["salary"].replace("\u20b9", "").replace(",", "")) if job.get("salary") else 0,
            "snippet": job["snippet"],
            "link": job["link"],
        }
        for job in data["jobs"]
    ]

# Fetch Adzuna jobs
def fetch_adzuna_jobs(query, location):
    url = (
        f"https://api.adzuna.com/v1/api/jobs/{ADZUNA_COUNTRY}/search/1?app_id={ADZUNA_APP_ID}"
        f"&app_key={ADZUNA_APP_KEY}&results_per_page=50&what={query or 'tech'}&where={location or 'India'}"
    )
    response = requests.get(url)

    if response.status_code != 200:
        return []  # Return empty list if the response is not successful

    data = response.json()

    # Check if the response contains results
    if "results" not in data:
        return []

    return [
        {
            "title": job["title"],
            "company": job["company"]["display_name"],
            "location": job["location"]["display_name"],
            "salary": job.get("salary_min", 0),
            "snippet": job["description"],
            "link": job["redirect_url"],
        }
        for job in data["results"]
    ]

# Combine jobs from both APIs
def combine_jobs(jooble_jobs, adzuna_jobs):
    return jooble_jobs + adzuna_jobs

# Filter jobs by salary
def filter_jobs_by_salary(jobs, min_salary):
    return [job for job in jobs if job["salary"] >= min_salary]

# Sort jobs by salary (descending) using heapq
def sort_jobs_by_salary(jobs):
    return heapq.nlargest(len(jobs), jobs, key=lambda x: x["salary"])

# Paginate results
def paginate_jobs(jobs, page, results_per_page):
    start = (page - 1) * results_per_page
    end = start + results_per_page
    return jobs[start:end]

@app.route("/search", methods=["GET"])
def search_jobs():
    query = request.args.get("query", "tech")
    location = request.args.get("location", "India")
    min_salary = int(request.args.get("min_salary", 0))
    page = int(request.args.get("page", 1))
    results_per_page = int(request.args.get("results_per_page", 10))

    jooble_jobs = fetch_jooble_jobs(query, location)
    adzuna_jobs = fetch_adzuna_jobs(query, location)

    combined_jobs = combine_jobs(jooble_jobs, adzuna_jobs)

    if min_salary > 0:
        combined_jobs = filter_jobs_by_salary(combined_jobs, min_salary)

    combined_jobs = sort_jobs_by_salary(combined_jobs)

    paginated_jobs = paginate_jobs(combined_jobs, page, results_per_page)

    return jsonify({
        "total_jobs": len(combined_jobs),
        "jobs": paginated_jobs,
        "current_page": page,
        "total_pages": (len(combined_jobs) + results_per_page - 1) // results_per_page
    })

if __name__ == "__main__":
    app.run(debug=True)
