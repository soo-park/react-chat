import React from 'react';
// FIXME: the io listener should go here


const Message = (props) => (
  <div className="message-group" key={props.item.id}>
    <div className="other-message-name">{props.item.name}</div>
    <div className="message-balloon other-message"> {props.item.message} </div>
  </div>
)

export default Message;
