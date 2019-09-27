import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';
import './GenericTab.css';

const GenericTab = (props) => {
  const { toggleSideBar, active, title } = props;
  return (
    <Tab toggleSideBar={toggleSideBar} active={active} title={title}>
      <div className="pt40">
        <table className="transfers">
          <tbody>
            <tr className="flex center pr40 pl40 pt30 pb30">
              <td className="flex column center pt40 pb40" colSpan="3">
                <h1 className="pt25">Coming Soon</h1>
                <p className="trans-details">Stay tuned for the content of this tab.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Tab>
  );
}

GenericTab.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default GenericTab;
