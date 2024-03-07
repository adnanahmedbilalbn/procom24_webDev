import React from 'react'
import ResponsiveTable from '../ResponsiveTable';


const MerchantDashboard2 = ({data}) => {
  return (
        // <div className="col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 dashboard-main">
        <>
        <h2 className='text-3xl p-3	'>Payments</h2>
        <div className='flex facts-main row '>
        <div className='facts-container teal-box col-12 col-lg-4 col-md-6 col-sm-10'>
          <p>All Payments</p>
          <h2>3,500 pkr</h2>
          <div className='facts-number my-3'>234 records</div>
        </div>
        <div className='facts-container green-box col-12 col-lg-4 col-md-6 col-sm-10'>
          <p>Succeeded</p>
          <h2>500</h2>
          <div className='facts-number my-3'>234 records</div>
        </div>
        <div className='facts-container red-box col-12 col-lg-4 col-md-6 col-sm-10'>
          <p>Rejected</p>
          <h2>440</h2>
          <div className='facts-number my-3'>234 records</div>
        </div>
        </div>
        {/* <ResponsiveTable /> */}
        <ResponsiveTable
           headers={['CUSTOMER ACCOUNT NO.', 'MERCHANT ACCOUNT NO.', 'STATUS', 'DESCRIPTION', 'TIME', 'DATE', 'AMOUNT']}
           data={
              data ?
                data?.map((record) => {
                  const dateTime = new Date(record?.date);
                
                  // Extracting date components
                  const year = dateTime.getFullYear();
                  const month = dateTime.getMonth() + 1; // Month is zero-based, so adding 1
                  const day = dateTime.getDate();
                
                  // Extracting time components
                  const hours = dateTime.getHours();
                  const minutes = dateTime.getMinutes();
                  const seconds = dateTime.getSeconds();
                
                  return [record?.accountNumber, 10, record?.status, record?.description, (hours+":"+minutes), (year+"/"+month+"/"+day), record.amount]
                })
                :

                [
                  ['1', 'John', 'Doe', '@john_doe', '02:00 PM', '07/03/2024', '60 $'],
                  ['2', 'Jane', 'Doe', '@jane_doe', '02:00 PM', '07/03/2024', '60 $'],
                ]
           }
        />
        </>
  )
}

export default MerchantDashboard2