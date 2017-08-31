import React from 'react';
import io from 'socket.io-client';
const socket = io();

import Left from './Left.jsx';
import Top from './Top.jsx';
import Message from './Message.jsx';
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


  componentDidMount() {
    var socket = io.connect('http://localhost:3000');
    socket.on('return-message', function (data) {
      console.log("this is data of socket io in Body", data);
      socket.emit('my other event', { my: 'data' });
    });
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
          <Message roomId={this.state.roomId}/>
        </div>
      </div>
    )
  }
}

export default Body;


