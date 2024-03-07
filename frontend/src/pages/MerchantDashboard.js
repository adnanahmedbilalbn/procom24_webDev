import React, { useState } from 'react';
import NavBar from '../common/Navbar';
import { CiWallet } from "react-icons/ci";
import { useFetchPaymentsQuery, useFetchAllPaymentsQuery } from '../store';
import { useSelector } from "react-redux";
import MerchantSidebar from './MerchantDashboard/MerchantSidebar';
import MerchantPayments from './MerchantDashboard/MerchantPayments';
import MerchantCustomers from './MerchantDashboard/MerchantCustomer';
import MerchantDashboard2 from './MerchantDashboard/MerchantDashboard';
import { useNavigate } from "react-router-dom";
import PaymentForm from './MerchantDashboard/MerchantRequest';
import MerchantSetting from './MerchantDashboard/MerchantSetting';
import MerchantReport from './MerchantDashboard/MerchantReport';

const MerchantDashboard = () => {
  const accountNumber = useSelector((state) => state.userData.accountNumber);
  const { data, isSuccess } = useFetchPaymentsQuery(accountNumber);
  const {allPaymentData, _} = useFetchAllPaymentsQuery();
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
        brandName={"Merchant Portal"}
        brandIcon={<CiWallet className='text-2xl	text-violet-800		'/>}
        userName={"Adnan"}
      />
      <div className="container">
        <div className="row">
          <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <MerchantSidebar setActiveSection={setActiveSection} activeSection={activeSection} />
          </div>
          {/*  */}
          <div className="col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 dashboard-main">

          {activeSection === 'Dashboard' && <MerchantDashboard2 />}
          {activeSection === 'Payments' && <MerchantPayments />}
          {activeSection === 'Customers' && <MerchantCustomers />}
          {activeSection === 'Payment Request' && <PaymentForm />}
          {activeSection === 'Setting' && <MerchantSetting />}
          {activeSection === 'Report' && <MerchantReport />}

          </ div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;