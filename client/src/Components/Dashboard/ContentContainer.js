import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "./Breadcrumb";
import DashboardContentWrapper from "../../Layouts/DashboardContentWrapper";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../../Pages/Dashboard/PageNotFound";

const ContentContainer = (props) => {
  return (
    <div className='content-wrapper'>
      <div className='container-fluid'>
        <Breadcrumb />

        <DashboardContentWrapper>
          <Routes>
            <Route path='/' element={<p>This is the dashboard</p>} />
            <Route path='/test' element={<p>This is the test</p>} />
            <Route path='/test1' element={<p>This is the test1</p>} />
            <Route path='/test2' element={<p>This is the test2</p>} />
            <Route path='/test3' element={<p>This is the test3</p>} />
            {/* <Route path='/*' element={<PageNotFound />} /> */}
          </Routes>
        </DashboardContentWrapper>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {};

export default ContentContainer;
