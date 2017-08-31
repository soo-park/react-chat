import React from 'react';
import axios from 'axios';
import Bottom from './Bottom.jsx'


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: this.props.roomId,
      messages: []
    };
  }
  

  handleMessage(id) {
    $.ajax({
      url: `http://localhost:8080/api/rooms/${id}/messages`, 
      success: (data) => {
        this.setState({
          messages: data
        })
      },
      error: (err) => {
        console.log('err making call for rooms in Left.jsx', err);
      }
    });
  }


  componentDidMount() {
    this.handleMessage(this.props.roomId);
  }


  componentWillReceiveProps(newProps) {
    this.handleMessage(newProps.roomId);
  }


  render () {
    return (
      <div>
        <div className="row message-body">
          <div className="message-box">
            {this.state.messages.length !== 0 ? this.state.messages.map(
              item => {
                return (
                  <div className="message-group" key={item.id} >
                    <div className="other-message-name">{item.name}</div>
                    <div className="message-balloon other-message"> {item.message} </div>
                  </div>
                )
              }
            ): ""}
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}
    
export default Message;
