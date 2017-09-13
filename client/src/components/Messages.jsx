import React from 'react';
import Message from './Message.jsx';


class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: this.props.roomId,
      userId: this.props.userId,
      userName: this.props.userName,
      messages: []
    };
  }
// FIXME: optimize // make request to web server, have web server request to DB?
// have DB run interval? have only the change since loading to be loaded on room change?
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
      <div className="message-box">
        {this.state.messages.length !== 0 ? this.state.messages.map(item => <Message item={item} key={item.id} userId={this.props.userId}/>): ""}
      </div>
    )
  }
}
    
export default Messages;
