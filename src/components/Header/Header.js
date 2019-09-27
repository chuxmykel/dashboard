import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-toggle-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

class Header extends Component {
  state = {
    switched: true,
  }

  toggleSwitch = () => this.setState(prevState => ({ switched: !prevState.switched }));

  render = () => {
    const { toggleSideBar, title } = this.props;
    return (
      <header className="header flex">
        <h1 className="title">
          {title}
        </h1>
        <div
          className="hamburger flex start-center pt20 cursor-point"
          onClick={toggleSideBar}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="controls flex space-b-center">
          <div className="flex center toggle-switch pt20">
            <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
            <p className="ml10">Test Mode</p>
          </div>
          <div className="flex center pt20 notification cursor-point">
            <FontAwesomeIcon icon={faBell} size="2x" />
            <span className="badge">1</span>
          </div>
          <div className="user flex center pt20">
            <div className="profile-img flex center cursor-point">
              O
            </div>
            <p className="username ml10">Oluwatobi Mayowa</p>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
