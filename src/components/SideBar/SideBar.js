import React from 'react';
import PropTypes from 'prop-types'; 
import BusinessName from '../BusinessName';
import Menu from '../Menu';
import AcceptPaymentButton from '../AcceptPaymentButton';
import './SideBar.css';

const SideBar = ({ open, toggleSideBar, selectTab, activeTab}) => (
  <div className={`side-bar flex column center p30${open ? ' open': ''}`}>
    <span
      className="close flex end-center cursor-point"
      >
      <button
        className="close-btn"
        onClick={toggleSideBar}
      >
        &times;
      </button>
    </span>
    <div className="biz-name">
      <BusinessName />
    </div>
    <div className="menu">
      <Menu selectTab={selectTab} activeTab={activeTab}/>
    </div>
    <div className="pay-btn flex center">
      <AcceptPaymentButton />
    </div>
  </div>
);

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  selectTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default SideBar;
