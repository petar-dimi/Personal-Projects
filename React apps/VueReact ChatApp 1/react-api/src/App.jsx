import React, { useState } from 'react';
import FilmList from './components/FilmList';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en'); // Default language is English

  return (
    <div className="app" style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Star Wars Films</h1>
      {/* Render the FilmList component */}
      <FilmList />
      {/* Render the LanguageSwitcher component */}
      <LanguageSwitcher setLanguage={setLanguage} />
    </div>
  );
}

export default App;
