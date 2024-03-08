import React from 'react'
import ResponsiveTable from '../ResponsiveTable';


const MerchantCustomer = ({data}) => {
  return (
        // <div className="col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 dashboard-main">
        <>
        <h2 className='text-3xl p-3	'>Customers</h2>
        <ResponsiveTable
           headers={['CUSTOMER','EMAIL', 'PHONE', 'DEFAULT PAYMENT METHOD', 'CREATE DATE']}
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
                  ['44518777', 'success', 'Payment Purpose', 'Bank habib','07/03/2024'],
                  ['44518777', 'success', 'Payment Purpose', 'Bank habib','07/03/2024'],
                  ['44518777', 'success', 'Payment Purpose', 'Bank habib','07/03/2024'],

                ]
           }
        />
        </>
  )
}

export default MerchantCustomer