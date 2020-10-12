import React, { useRef } from 'react';
import './index.css';
function Switch({ setDarkMode, checked, setChecked }) {
  const ref = useRef(null);
  const handleChange = () => {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} type="checkbox" className="checkbox" id="checkbox" onChange={handleChange} checked={checked} />
      <label className="switch" htmlFor="checkbox"> </label>
    </div>

  );
}

export default Switch;