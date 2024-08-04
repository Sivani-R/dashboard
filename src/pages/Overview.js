import React from 'react';
import LineChartComponent from '../components/LineChart';
import BarChartComponent from '../components/BarChart';
import PieChartComponent from '../components/PieChart';

const Overview = () => {
  const lineChartData = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
  ];

  const barChartData = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
  ];

  const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div>
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

export default Overview;
