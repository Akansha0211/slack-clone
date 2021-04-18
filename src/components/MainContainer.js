import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <div id="main-container">
        <div className="about-channel">
            <div className="channel-name"># announcement</div>
            <div className="channel-description">Something something etc...</div>
        </div>
        <div className="messages-list">
            <div className="message">
                <div className="left-block">
                    <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72"></img>
                </div>
                <div className="right-block">
                    <div className="user">
                        <div>Harshit</div>
                        <div>7:45 PM</div>
                    </div>
                    <div className="user-mesg">Hey hello whats up ?</div>
                </div>           
            </div>

            <div className="message">
                <div className="left-block">
                    <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72"></img>
                </div>
                <div className="right-block">
                    <div className="user">
                        <div>Yash</div>
                        <div>8:15 PM</div>
                    </div>
                    <div className="user-mesg">Sure...</div>
                </div>           
            </div>
        </div>

        <div className="chat-box">
            <textarea placeholder="Type something here and press enter..."></textarea>
        </div>
      </div>
    );
  }
}

export default MainContainer;

