// Dashboard.js
import React, { useState } from 'react';
import NavBar from './Navbar';
import Sidebar from './Sidebar';
import Payment from './Dashboard/Payment';
import InstantPayment from './Dashboard/InstantPayment';
import QRScan from './Dashboard/QRScan';
import { CiWallet } from "react-icons/ci";
import { useFetchPaymentsQuery } from '../store';
import { useSelector } from "react-redux";

const Dashboard = () => {
  const accountNumber = useSelector((state) => state.userData.accountNumber);
  const { data, isSuccess } = useFetchPaymentsQuery(accountNumber);
  const [activeSection, setActiveSection] = useState('payment');

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
            <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
          </div>
          {/*  */}
          <div className="col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 dashboard-main">

          {activeSection === 'payment' && <Payment data={data}/>}
          {activeSection === 'instantPayment' && <InstantPayment />}
          {activeSection === 'qrScan' && <QRScan />}
          </ div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;