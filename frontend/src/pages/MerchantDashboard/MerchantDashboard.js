import React from 'react';
import PieChart from '../../component/Chart';
import BarChart from '../../component/payHabib/BarChart';

const ChartContainer = ({ children }) => {
  return (
    <div className="chart-container">
      {children}
    </div>
  );
};

const MerchantDashboard2 = () => {
  const data = [
    { label: 'January', value: 1000 },
    { label: 'February', value: 1500 },
    { label: 'March', value: 2000 },
    { label: 'April', value: 1800 },
    { label: 'May', value: 2200 },
    { label: 'June', value: 2500 },
  ];

  return (
    <div>
      <h1 className='text-3xl'>Dashboard</h1>
      <div className='Reports py-9 text-2xl'>
        <h1>Reports</h1>

        <div className='w-max m-auto chart-section'>
          <h3 className="chart-heading">Revenue</h3>
          <ChartContainer>
            <BarChart data={data} />
          </ChartContainer>
        </div>

        <div className='w-max mt-5 m-auto chart-section'>
          <h3 className="chart-heading">Payment Status</h3>
          <ChartContainer>
            <PieChart />
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard2;
