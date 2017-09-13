import React from 'react';


class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName,
      roomId: this.props.roomId,
      currentRoom: null
    }
  }


  handleCurrentRoom(id) {
    $.ajax({
      url: 'http://localhost:8080/api/rooms/' + id, 
      success: (data) => {
        this.setState({
          currentRoom: data
        })
      },
      error: (err) => {
        console.log('err making call for rooms in Left.jsx', err);
      }
    });
  }


  componentDidMount() {
    this.handleCurrentRoom(this.props.roomId);
  }
  

  componentWillReceiveProps(newProps) {
    this.handleCurrentRoom(newProps.roomId);
  }


  render () {
    return (
      <header className="top bounding">
        <div className="top-name"> {this.state.currentRoom ? this.state.currentRoom.name : ""} </div>
        <div>
          <span className="red-text">{this.state.userName}</span>
          <span>{this.state.currentRoom ? this.state.currentRoom.users.map(user => ", " + user): ""}</span>
        </div>
      </header>
    )
  }
}


export default Top;
