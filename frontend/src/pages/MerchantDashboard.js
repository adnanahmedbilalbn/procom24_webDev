// Dashboard.js
import React, { useState } from 'react';
import NavBar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import Payment from './CustomerDashboard/Payment';
import InstantPayment from './CustomerDashboard/InstantPayment';
import QRScan from './CustomerDashboard/QRScan';
import { CiWallet } from "react-icons/ci";
import { useFetchPaymentsQuery, useFetchAllPaymentsQuery } from '../store';
import { useSelector } from "react-redux";
import MerchantSidebar from './MerchantDashboard/MerchantSidebar';
import { useNavigate } from "react-router-dom";
import PaymentForm from './MerchantDashboard/MerchantRequest';
import MerchantSetting from './MerchantDashboard/MerchantSetting';
import MerchantReport from './MerchantDashboard/MerchantReport';

const MerchantDashboard = () => {
  // const accountNumber = useSelector((state) => state.userData.accountNumber);
  const { data, isSuccess } = useFetchPaymentsQuery(-99);

  console.log(data)
  
  const [activeSection, setActiveSection] = useState('payment');

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isCustomerLoggedIn = useSelector((state) => state.isCustomerLoggedIn);

  const navigate = useNavigate()

  if (!isLoggedIn && !isCustomerLoggedIn){
    navigate("/merchant/login")
  }

  if (!isLoggedIn){
    navigate("/merchant/login")
  }

  return (
    <div>
      <NavBar
<<<<<<< HEAD
        brandName={"Customer Portal"}
        brandIcon={<CiWallet className='text-2xl	text-teal-400	'/>}
        userName={"Merchant"}
=======
        brandName={"Merchant Portal"}
        brandIcon={<CiWallet className='text-2xl	text-violet-800		'/>}
        userName={"Adnan"}
>>>>>>> 68ac184d58a20baafc2289e30cd5392d538235b4
      />
      <div className="container">
        <div className="row">
          <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <MerchantSidebar setActiveSection={setActiveSection} activeSection={activeSection} />
          </div>
          {/*  */}
          <div className="col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 dashboard-main">

<<<<<<< HEAD
          {activeSection === 'payment' && <Payment data={data}/>}
          {activeSection === 'instantPayment' && <InstantPayment />}
          {activeSection === 'qrScan' && <QRScan />}
=======
          {activeSection === 'Dashboard' && <MerchantDashboard2 />}
          {activeSection === 'Payments' && <MerchantPayments />}
          {activeSection === 'Customers' && <MerchantCustomers />}
          {activeSection === 'Payment Request' && <PaymentForm />}
          {activeSection === 'Setting' && <MerchantSetting />}
          {activeSection === 'Report' && <MerchantReport />}

>>>>>>> 68ac184d58a20baafc2289e30cd5392d538235b4
          </ div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;