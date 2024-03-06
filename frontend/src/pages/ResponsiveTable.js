// ResponsiveTable.js
import React from 'react';
import { Table } from 'react-bootstrap';

const ResponsiveTable = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>Doe</td>
          <td>@john_doe</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane_doe</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ResponsiveTable;
