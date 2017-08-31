import React from 'react';
import Login from './components/Login.jsx';
import Body from './components/Body.jsx';
import io from 'socket.io-client';
var socket = io();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      userName: null,
      loginTime: null
    }
  }


  componentDidMount() {
    var socket = io.connect('http://localhost:3000');
    socket.on('return-message', function (data) {
      console.log("this is data of socket io in Body", data);
      socket.emit('my other event', { my: 'data' });
    });
  }


  handleViewChange(viewName, userName, loginTime) {
    this.setState({
      view: viewName,
      userName: userName,
      loginTime: loginTime
    });
  }


  render () {
    return (
      <div>
        {this.state.view === 'login' ? <Login changeView={this.handleViewChange.bind(this)}/> : <Body status={this.state}/>}
      </div>
    )
  }
}


export default App;
