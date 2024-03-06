// import React from 'react';
// import Header from './Navbar';


// const CustomerDashboard = () => {
//   return (
//     <div>
//         <Header />
//     </div>
//   )
// }

// export default CustomerDashboard

// Dashboard.js
import React from 'react';
import NavBar from './Navbar';
import Sidebar from './Sidebar';
import ResponsiveTable from './ResponsiveTable';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2>Main Content Area</h2>
            <ResponsiveTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
