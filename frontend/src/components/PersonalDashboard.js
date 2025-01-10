import React, { useState } from 'react';
import {
  FaPlusCircle,
  FaCalendarAlt,
  FaListAlt,
  FaUpload,
  FaQuoteLeft,
  FaRegMoon,
  FaRegSun,
} from 'react-icons/fa';

const PersonalDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [habits, setHabits] = useState(['Drink Water', 'Exercise']);
  const [tasks, setTasks] = useState([]);
  const [quote, setQuote] = useState('"Believe in yourself! Every journey starts with a single step."');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const addHabit = () => {
    const newHabit = prompt('Enter a new habit:');
    if (newHabit) {
      setHabits([...habits, newHabit]);
    }
  };

  const addTask = () => {
    const newTask = prompt('Enter a new task:');
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  const changeQuote = () => {
    const quotes = [
      'Push yourself, because no one else is going to do it for you.',
      'Great things never come from comfort zones.',
      'Dream it. Wish it. Do it.',
      'Success doesn’t just find you. You have to go out and get it.',
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: darkMode
          ? 'linear-gradient(135deg, #333, #555)'
          : 'linear-gradient(135deg, #f8d7e0, #fff)',
        color: darkMode ? '#fff' : '#333',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          backgroundColor: darkMode ? '#555' : '#ff5e8a',
          color: 'white',
          textAlign: 'center',
          padding: '15px',
        }}
      >
        <h1>Personal Dashboard</h1>
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            margin: '10px auto',
          }}
        >
          {darkMode ? <FaRegSun /> : <FaRegMoon />} {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Habit Tracker */}
        <div
          style={{
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '15px',
            width: '300px',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s',
          }}
        >
          <h3>Habit Tracker</h3>
          <div style={{ margin: '10px 0' }}>
            {habits.map((habit, index) => (
              <p key={index} style={{ margin: '5px 0' }}>{habit}</p>
            ))}
          </div>
          <button
            onClick={addHabit}
            style={{
              background: '#ff5e8a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            <FaPlusCircle /> Add Habit
          </button>
        </div>

        {/* To-Do List */}
        <div
          style={{
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '15px',
            width: '300px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h3>To-Do List</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ margin: '5px 0' }}>{task}</li>
            ))}
          </ul>
          <button
            onClick={addTask}
            style={{
              background: '#ff5e8a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
            }}
          >
            <FaListAlt /> Add Task
          </button>
        </div>

        {/* Quote Section */}
        <div
          style={{
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '15px',
            width: '300px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h3>Inspirational Quote</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>{quote}</p>
          <button
            onClick={changeQuote}
            style={{
              background: '#ff5e8a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
            }}
          >
            <FaQuoteLeft /> Change Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
