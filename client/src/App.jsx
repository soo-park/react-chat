import React from 'react';
import Login from './components/Login.jsx';
import Body from './components/Body.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      userName: null,
      loginTime: null
    }
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
