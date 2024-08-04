import React from 'react';
import LineChartComponent from '../components/LineChart';
import BarChartComponent from '../components/BarChart';
import PieChartComponent from '../components/PieChart';

const Analytics = () => {
  
  const lineChartData = [
    { name: 'Jan', uv: 5000 },
    { name: 'Feb', uv: 4000 },
    { name: 'Mar', uv: 3000 },
    { name: 'Apr', uv: 2000 },
    { name: 'May', uv: 1000 },
  ];

  const barChartData = [
    { name: 'Jan', sales: 5000 },
    { name: 'Feb', sales: 4000 },
    { name: 'Mar', sales: 3000 },
    { name: 'Apr', sales: 2000 },
    { name: 'May', sales: 1000 },
  ];

  const pieChartData = [
    { name: 'Group A', value: 500 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <div className="chart-container">
        <LineChartComponent data={lineChartData} />
      </div>
      <div className="chart-container">
        <BarChartComponent data={barChartData} />
      </div>
      <div className="chart-container">
        <PieChartComponent data={pieChartData} />
      </div>
    </div>
  );
};

export default Analytics;
