import React from 'react';
import PropTypes from 'prop-types';
import {
  faHome,
  faWallet,
  faCreditCard,
  faShareSquare,
  faCode,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../MenuItem';

const Menu = props => {
  const { selectTab, activeTab } = props;
  return (
    <nav>
      <ul>
        <MenuItem
          icon={faHome}
          label="Dashboard"
          selectTab={selectTab}
          activeTab={activeTab}
        />
        <MenuItem
          icon={faWallet}
          label="Balances"
          selectTab={selectTab}
          activeTab={activeTab}
        />
        <MenuItem
          icon={faCreditCard}
          label="Payments"
          selectTab={selectTab}
          activeTab={activeTab}
        />
        <MenuItem
          icon={faShareSquare}
          label="Transfers"
          selectTab={selectTab}
          activeTab={activeTab}
        />
        <MenuItem
          icon={faCode}
          label="Developers"
          selectTab={selectTab}
          activeTab={activeTab}
        />
        <MenuItem
          icon={faCog}
          label="Settings"
          selectTab={selectTab}
          activeTab={activeTab}
        />
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Menu;
