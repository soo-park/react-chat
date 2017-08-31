import React from 'react';
import $ from 'jquery';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this); 
  }


  handleUsername(e) {
    e.preventDefault();
    var input = $("#user").val();
    var timeStamp = "08/27/2017 12:00:00 pm"

    if(!input) {
      console.log("username not entered");
    } else {
      this.props.changeView('body', input, timeStamp);
    }
  }


  render () {
    return (
      <div className="bounding login">
        <div>
          <input type="text" placeholder="Type your username..." className="form-control item" id="user"></input><br/>
          <button type="submit" className="btn btn-primary item" onClick={(e)=> this.handleUsername(e)}>Join the DoorDash Chat!</button>
        </div>
      </div>
    )
  }
}


export default Login;
