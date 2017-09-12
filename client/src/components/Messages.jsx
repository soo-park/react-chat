import React from 'react';
import Message from './Message.jsx';


class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: this.props.roomId,
      messages: []
    };
  }
  
// FIXME: dynamically render from them messages array
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
      <div className="message-body">
        <div>
          <div className="message-box">
            {this.state.messages.length !== 0 ? this.state.messages.map(item => <Message item={item} key={item.id}/>): ""}
          </div>
        </div>
      </div>
    )
  }
}
    
export default Messages;
