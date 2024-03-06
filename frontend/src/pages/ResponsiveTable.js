// // ResponsiveTable.js
// import React from 'react';
// import { Table } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';


// const ResponsiveTable = () => {
//   return (
//     <Table striped hover responsive>
//       <thead>
//         <tr>
//           <th>CUSTOMER ACCOUNT NO.</th>
//           <th>MERCHANT ACCOUNT NO.</th>
//           <th>STATUS</th>
//           <th>DESCRIPTION</th>
//           <th>TIME</th>
//           <th>DATE</th>
//           <th>AMOUNT</th>
//           <th>ACTIONS</th>

//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>John</td>
//           <td>Doe</td>
//           <td>@john_doe</td>
//           <td>02:00 PM</td>
//           <td>07/03/2024</td>
//           <td>60 $</td>
//           <div>
//             <Button className='bg-green-400' variant="success">Pay</Button>{' '}
//             <Button className='bg-red-400' variant="danger">Reject</Button>{' '}

//           </div>



//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jane</td>
//           <td>Doe</td>
//           <td>@jane_doe</td>
//           <td>02:00 PM</td>
//           <td>07/03/2024</td>
//           <td>60 $</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// };

// export default ResponsiveTable;



import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ResponsiveTable = ({ headers, data }) => {
  return (
    <Table striped hover responsive>
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

export default ResponsiveTable;
