import React from 'react';
import Login from './components/Login.jsx';
import Body from './components/Body.jsx';
import io from 'socket.io-client';
var socket = io();

// FIXME: implement redux for better state management
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      userName: null,
      userId: null,
      messages: []
    }
  }

  
  handleViewChange(viewName, userName, userId) {
    this.setState({
      view: viewName,
      userName: userName,
      userId: userId
    });
  }

  
  componentDidMount() {
    socket.on('chat message', function (data) {
      console.log("this is data of socket io in Messages", data);
    });
  }


  render () {
    return (
      <div>
        {this.state.view === 'login' ? <Login changeView={this.handleViewChange.bind(this)}/> : <Body status={this.state} socket={socket} />}
      </div>
    )
  }
}


export default App;
