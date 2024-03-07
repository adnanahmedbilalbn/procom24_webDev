import React from 'react';
import NavBar from './Navbar';
import Sidebar from './Sidebar';
import ResponsiveTable from './ResponsiveTable';
import { CiWallet } from "react-icons/ci";
import { useFetchPaymentsQuery } from '../store';
import { useSelector } from "react-redux";


const Dashboard = () => {

  const accountNumber = useSelector((state) => {
    console.log("Selector =>", state);
    return state.userData.accountNumber;
  });
  
  console.log(accountNumber);

  const {data, isSuccess} = useFetchPaymentsQuery(accountNumber);

  if(data){
    console.log(data);
  }
  else{
    console.log("No Data")
  }

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
               data={
                  data ?
                    data.map((record) => {
                      const dateTime = new Date(record.date);

                      // Extracting date components
                      const year = dateTime.getFullYear();
                      const month = dateTime.getMonth() + 1; // Month is zero-based, so adding 1
                      const day = dateTime.getDate();

                      // Extracting time components
                      const hours = dateTime.getHours();
                      const minutes = dateTime.getMinutes();
                      const seconds = dateTime.getSeconds();

                      return [record.accountNumber, 10, record.status, record.description, (hours+":"+minutes), (year+"/"+month+"/"+day), record.amount]
                    })
                    :
                    
                    [
                      ['1', 'John', 'Doe', '@john_doe', '02:00 PM', '07/03/2024', '60 $'],
                      ['2', 'Jane', 'Doe', '@jane_doe', '02:00 PM', '07/03/2024', '60 $'],
                    ]
               }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
