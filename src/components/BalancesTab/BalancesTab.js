import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';
import BTC from '../../img/BTC.png';
import ETH from '../../img/ETH.png';
import NGN from '../../img/NGN.png';
import './BalancesTab.css';

const BalancesTab = (props) => {
  const { toggleSideBar, active, title } = props;
  return (
    <Tab toggleSideBar={toggleSideBar} active={active} title={title}>
      <div className="pt40">
        <table className="balance-table">
          <thead>
            <tr className="flex pr40 pl40 pt20 pb20">
              <th className="col flex start-center">Name</th>
              <th className="col flex end-center">Pending</th>
              <th className="col flex end-center">Available</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex pr40 pl40 pt25 pb25">
              <td className="col flex start-center">
                <div className="currency-icon">
                  <img alt="" src={BTC} />
                </div>
                <div className="ml15 currency-name">
                  Bitcoin
                </div>
              </td>
              <td className="col flex column end-center-col">
                <div className="main-amt">
                  10.12345678 BTC
                </div>
                <div className="sub-amt">
                  2,000,000 NGN
                </div>
              </td>
              <td className="col flex column end-center-col">
                <div className="main-amt">
                  10.12345678 BTC
                </div>
                <div className="sub-amt">
                  2,000,000 NGN
                </div>
              </td>
            </tr>
            <tr className="flex pr40 pl40 pt25 pb25">
              <td className="col flex start-center">
                <div className="currency-icon">
                  <img alt="" src={ETH} />
                </div>
                <div className="ml15 currency-name">
                  Ethereum
                </div>
              </td>
              <td className="col flex column end-center-col">
                <div className="main-amt">
                  10.12345678 ETH
                </div>
                <div className="sub-amt">
                  2,000,000 NGN
                </div>
              </td>
              <td className="col flex column end-center-col">
                <div className="main-amt">
                  10.12345678 ETH
                </div>
                <div className="sub-amt">
                  2,000,000 NGN
                </div>
              </td>
            </tr>
            <tr className="flex pr40 pl40 pt25 pb25">
              <td className="col flex start-center">
                <div className="currency-icon">
                  <img alt="" src={NGN} className="ngn"/>
                </div>
                <div className="ml15 currency-name">
                  Naira
                </div>
              </td>
              <td className="col flex column end-center-col">
                <div className="main-amt">
                  NGN 800,000
                </div>
              </td>
              <td className="col flex column end-center-col">
                <div className="main-amt">
                  NGN 2,000,000
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Tab>
  );
}

BalancesTab.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default BalancesTab;
