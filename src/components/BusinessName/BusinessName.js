import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import './BusinessName.css';

const BusinessName = () => (
  <div className="flex start-center">
    <div className="initial flex center mr10 cursor-point">
      B
    </div>
    <div className="flex center cursor-point">
      <h4 className="mr10">Business name</h4>
      <div className="mt5">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  </div>
);

export default BusinessName;
