import React, { useEffect } from 'react';
import { useTheme } from '../../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#3d2851' : '#ece3f5';
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} style={{ border: 'none', background: 'transparent' }}>
      <FontAwesomeIcon icon={faMoon} style={{ fill: isDarkMode ? '#f0f0f0' : '#333' }} />
    </button>
  );
};

export default ThemeToggle;