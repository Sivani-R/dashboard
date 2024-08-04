import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('theme', settings.theme);
    document.documentElement.setAttribute('data-theme', settings.theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setSettings((prevSettings) => ({ ...prevSettings, theme: savedTheme }));
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="theme">Theme:</label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            Enable notifications
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
