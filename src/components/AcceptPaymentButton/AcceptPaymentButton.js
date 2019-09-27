import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import './AcceptPaymentButton.css';

const AcceptPaymentButton = () => (
  <div className="flex center accept-btn p10">
    <div className="mr10">
      <FontAwesomeIcon icon={faPlusCircle} />
    </div>
    <h3>Accept payment</h3>
  </div>
);

export default AcceptPaymentButton;
