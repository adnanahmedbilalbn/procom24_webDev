import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Revenue',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Initialize new chart instance
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: options,
    });
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
