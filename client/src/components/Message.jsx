import React from 'react';


class Message extends React.Component {
  constructor(props) {
    super(props);
  }


  scrollToBottom() {
    this.el.scrollIntoView({ behaviour: 'smooth' });
  }
  

  componentDidMount() {
    this.scrollToBottom();
  }


  render () {
    var display;
    if (this.props.item.id === this.props.userId) {
      display = (
        <div className='my-message message-balloon'>{this.props.item.message}</div>
      )
    } else {
      display = (
        <div>
          <div className="other-message-name">{this.props.item.name}</div>
          <div className="message-balloon other-message"> {this.props.item.message} </div>
        </div>
      );
    }

    return (
      <div className="message-group" key={this.props.item.id} ref={el => this.el = el}>
        {display}
      </div>
    )
  }
}


export default Message;
