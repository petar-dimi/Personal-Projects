import React, { useState } from 'react';

const LanguageSwitcher = ({ setLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className="language-switcher" style={{ marginTop: '20px', textAlign: 'center' }}>
      <button onClick={toggleLanguage}>
        Switch to {currentLanguage === 'en' ? 'German' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
