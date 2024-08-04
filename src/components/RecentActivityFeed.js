import React from 'react';

const RecentActivityFeed = ({ activities }) => {
  return (
    <div className="recent-activity-feed">
      <h3>Recent Activities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <span>{activity.time} - {activity.activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityFeed;
