import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import './TransfersTab.css';

const TransfersTab = (props) => {
  const { toggleSideBar, active, title } = props;
  return (
    <Tab toggleSideBar={toggleSideBar} active={active} title={title}>
      <div className="pt40">
        <table className="transfers">
          <tbody>
            <tr className="flex end-center pr40 pl40 pt20 pb20">
              <td colSpan="3">
                <button className="trans-btn flex center cursor-point">
                  New transfer
                  <div className="ml10 mt5">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </button>
              </td>
            </tr>
            <tr className="flex pr40 pl40 pt20 pb20 special">
              <th className="col flex start-center">Reference</th>
              <th className="col flex end-center">Status</th>
              <th className="col flex end-center">Amount</th>
            </tr>
            <tr className="flex center pr40 pl40 pt30 pb30">
              <td className="flex column center pt40 pb40" colSpan="3">
                <h1 className="pt25">You haven't made any transfers yet</h1>
                <p className="trans-details">Your transfers will be displayed here.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Tab>
  );
}

TransfersTab.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default TransfersTab;
