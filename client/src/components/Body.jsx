import React from 'react';
import Left from './Left.jsx';
import Top from './Top.jsx';
import Messages from './Messages.jsx';
import Bottom from './Bottom.jsx';


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.status.view,
      userName: props.status.userName,
      roomId: 0
    }
  }


  handleRoomChange(id) {
    this.setState({ roomId : id });
  }


  componentWillReceiveProps() {
    this.setState({ roomId : id });    
  }


  render () {
    return (
      <div>
        <Left userName={this.state.userName} roomId={this.state.roomId} handleRoomChange={this.handleRoomChange.bind(this)}/>
        <div className="viewPane">
          <Top userName={this.state.userName} roomId={this.state.roomId} />
          <Messages roomId={this.state.roomId} socket={this.props.socket} />
          <Bottom socket={this.props.socket} />          
        </div>
      </div>
    )
  }
}

export default Body;


