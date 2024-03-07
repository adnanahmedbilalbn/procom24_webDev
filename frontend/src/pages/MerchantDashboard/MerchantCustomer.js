

import React from 'react';
import { Table, Button } from 'react-bootstrap';

const MerchantCustomers = ({ headers, data }) => {
  return (
    <Table striped hover responsive className='mt-5'>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
            <td>
              <div>
                <Button className='bg-green-400' variant="success">Pay</Button>{' '}
                <Button className='bg-red-400' variant="danger">Reject</Button>{' '}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MerchantCustomers;
