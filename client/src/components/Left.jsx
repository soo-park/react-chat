import React from 'react';
import $ from 'jquery';


class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }


  handleTime() {
    var time = new Date().getTime() / 1000;
    var currentTime = time;
    var timeSpent = 0;

    var secondsToTime = (time) => {
      var days = Math.floor(time / 86400);
      var hours = Math.floor((time - (days * 86400 ))/3600);
      var minutes = Math.floor((time - (days * 86400 ) - (hours *3600 ))/60);
      var secs = Math.floor((time - (days * 86400 ) - (hours *3600 ) - (minutes*60)));

      if (days === 0 && hours === 0 && minutes === 0) {
        return secs + " seconds passed";
      } else {
        days !== 0 ? days = days + " days " : "";
        hours !== 0 ? hours = hours + " hours " : "";  
        return days + hours + minutes + " minutes passed";      
      }
    };
    
    
    setInterval(function(){
      var currentTime = new Date().getTime() / 1000;
      timeSpent = secondsToTime(currentTime - time);
      $(".time").html(timeSpent);
    }, 1000);   
  }


  componentDidMount() {
    this.handleTime();
    $.ajax({
      url: 'http://localhost:8080/api/rooms', 
      success: (data) => {
        this.setState({
          rooms: data
        })
      },
      error: (err) => {
        console.log('err making call for rooms in Left.jsx', err);
      }
    });
  }


  handleClick(e, id) {
    e.preventDefault();
    this.props.handleRoomChange(id);
  }


  render () {
    return (
      <div className="navbar navbar-default navbar-fixed-left">
        <div className="navbar-brand" href="#">
          <span>{this.props.userName}</span><br />
          <span className="navbar-sub-brand time">Elapsed time</span>
        </div>
        <ul className="nav navbar-nav">
          {this.state ? this.state.rooms.map(item => <li key={item.id}><a href="#" onClick={(e)=> {this.handleClick(e, item.id)}}>{item.name}</a></li>) : "Loading"}
        </ul>
        </div>
      )
    }
  }
  
  export default Left;