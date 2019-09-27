import React, { Component } from 'react';
import SideBar from './components/SideBar';
import BalancesTab from './components/BalancesTab';
import TransfersTab from './components/TransfersTab';
import GenericTab from './components/GenericTab/GenericTab';
import './App.css';
import 'react-toggle-switch/dist/css/switch.min.css'

class App extends Component {
  state = {
    sideBarOpen: false,
    activeTab: 'balances',
  }

  toggleSideBar = () => this.setState(prevState => ({
    sideBarOpen: !prevState.sideBarOpen,
  }));

  selectTab = activeTab => this.setState({ activeTab });

  render = () => {
    const { sideBarOpen, activeTab } = this.state;
    const title = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
    return (
      <div className="full-vh">
        <SideBar
          open={sideBarOpen}
          toggleSideBar={this.toggleSideBar}
          selectTab={this.selectTab}
          activeTab={activeTab}
        />
        <BalancesTab
          toggleSideBar={this.toggleSideBar}
          active={activeTab === 'balances'}
          title={title}
        />
        <TransfersTab
          toggleSideBar={this.toggleSideBar}
          active={activeTab === 'transfers'}
          title={title}
        />
        <GenericTab
          toggleSideBar={this.toggleSideBar}
          active={activeTab !== 'transfers' && activeTab !== 'balances'}
          title={title}
        />
      </div>
    );
  }
}


export default App;

