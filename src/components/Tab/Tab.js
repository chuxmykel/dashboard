import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import './Tab.css';

const Tab = props => {
  const { children, toggleSideBar, active, title } = props;
  return (
    <div className={`tab${active ? ' active' : ' inactive'}`}>
      <div className="ml7vw mr7vw">
        <Header toggleSideBar={toggleSideBar} title={title} />
        <div className="tab-content">
          {children}
        </div>
      </div>
    </div>
  );
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tab;
