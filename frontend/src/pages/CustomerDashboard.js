import React from 'react';
import NavBar from './Navbar';
import Sidebar from './Sidebar';
import ResponsiveTable from './ResponsiveTable';
import { CiWallet } from "react-icons/ci";


const Dashboard = () => {
  return (
    <div>
      <NavBar
      brandName={"Customer Portal"}
      brandIcon={<CiWallet className='text-2xl	text-teal-400	'/>}
      userName={"Adnan"}
       />
      <div className="container">
        <div className="row">
          <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <Sidebar />
          </div>
          <div className="col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 dashboard-main">
            <h2>Payments</h2>
            <div className='flex '>
            <div className='facts-container teal-box'>
              <p>Total Pending Records</p>
              <div className='facts-number my-3'>234 records</div>
            </div>
            <div className='facts-container green-box'>
              <p>Total Paid Records</p>
              <div className='facts-number my-3'>234 records</div>
            </div>
            <div className='facts-container red-box'>
              <p>Total Rejected Records</p>
              <div className='facts-number my-3'>234 records</div>
            </div>
            </div>
            {/* <ResponsiveTable /> */}
            <ResponsiveTable
               headers={['CUSTOMER ACCOUNT NO.', 'MERCHANT ACCOUNT NO.', 'STATUS', 'DESCRIPTION', 'TIME', 'DATE', 'AMOUNT']}
               data={[
                 ['1', 'John', 'Doe', '@john_doe', '02:00 PM', '07/03/2024', '60 $'],
                 ['2', 'Jane', 'Doe', '@jane_doe', '02:00 PM', '07/03/2024', '60 $'],
               ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
