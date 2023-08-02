import React from "react";
// import "../vendor/bootstrap/css/bootstrap.min.css";
// import "../admincss/admin.css";
// import "../vendor/datatables/dataTables.bootstrap4.css";
// import "../vendor/font-awesome/css/font-awesome.min.css";
// import "../admincss/custom.css";
import ContentContainer from "../Components/Dashboard/ContentContainer";
import Footer from "../Components/Dashboard/Footer";
import Index from "../Components/Dashboard/Navigation/Index";

const Dashboard = (props) => {
  return (
    <div className='fixed-nav sticky-footer' id='page-top'>
      <Index />

      <ContentContainer />

      <Footer />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
