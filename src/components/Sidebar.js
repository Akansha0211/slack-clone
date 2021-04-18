import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
            <div className="avatar">
                <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg"/>
            </div>
            <div>
                Akansha
            </div>
        </div>
        <hr className="sidebar-spacer"></hr>

        <div className="channels">
            <div className="header">Channels</div>
            <ul className="channels-list">
                <li># assignment</li>
                <li># test</li>
            </ul>
        </div>
        <div className="direct-msgs"></div>
      </div>
    );
  }
}

export default Sidebar;

