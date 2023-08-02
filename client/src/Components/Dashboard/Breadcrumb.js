import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = (props) => {
  const { pathname } = useLocation();
  const breadcrumbArray = pathname.split("/").slice(1);

  return (
    <ol className='breadcrumb'>
      {breadcrumbArray.map((menu, index) => {
        if (index + 1 === breadcrumbArray.length) {
          return (
            <li key={index} className='breadcrumb-item active'>
              {menu}
            </li>
          );
        } else {
          return (
            <li key={index} className='breadcrumb-item'>
              <Link to={menu}>{menu}</Link>
            </li>
          );
        }
      })}
      <li className='breadcrumb-item'>
        <Link to={"/"}>Dashboard</Link>
      </li>
      <li className='breadcrumb-item active'>My Dashboard</li>
    </ol>
  );
};

Breadcrumb.propTypes = {};

export default Breadcrumb;
