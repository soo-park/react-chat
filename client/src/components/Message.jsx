import React from 'react';
// FIXME: the io listener should go here


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
    return (
      <div className="message-group" key={this.props.item.id} ref={el => this.el = el}>
        <div className="other-message-name">{this.props.item.name}</div>
        <div className="message-balloon other-message"> {this.props.item.message} </div>
      </div>
    )
  }
}


export default Message;
