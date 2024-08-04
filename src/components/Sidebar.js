import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
