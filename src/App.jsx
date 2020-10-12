import React, { useState, useEffect } from 'react';
import './globals.css';
import Header from './components/Header';
import TopCardList from './components/TopCardList';
import Overview from './components/Overview';
import Switch from '../Switch';
import './index.css';

function App() {
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? 'is-light-mode' : 'is-dark-mode';
  const changeMedia = (mq) => {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener(changeMedia);
    setChecked(true);
    setDarkMode(true);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch setDarkMode={setDarkMode} checked={checked} setChecked={setChecked} />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
