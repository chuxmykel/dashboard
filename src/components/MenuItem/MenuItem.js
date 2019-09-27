import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuItem.css';

const MenuItem = props => {
  const { icon, label, selectTab, activeTab } = props;
  return (
    <li
      className="menu-item mb20"
      onClick={()  => selectTab(label.toLowerCase())}
    >
      <span
        className={`flex start-center${activeTab === label.toLowerCase() ? ' active-tab' : ''}`}
      >
        <div className="icon-container"><FontAwesomeIcon icon={icon} size="lg" /></div>
        <p className="label">{label}</p>
      </span>
    </li>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default MenuItem;
