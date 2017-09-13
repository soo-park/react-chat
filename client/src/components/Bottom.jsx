import React from 'react';


function handleMessageSend(e, props) {
  // console.log(props, "is the props in the Bottom");
  var socket = props.socket;

  e.preventDefault();
  var input = $(".message").val();
  
  if(!input) {
    console.log("message not entered");
  } else {
    // cross site scripting prevention
    var xssFilters = require('xss-filters');
    input = xssFilters.inHTMLData(input);

    // Hardcode appending
    var line = `<div class='my-message message-balloon'>` + input + "</div>";
    $(".message-box").append(line);
    $(".message-balloon")[$(".message-balloon").length-1].scrollIntoView({ behaviour: 'smooth' });
    $(".message").val('');

    // FIXME: appending using socket.io
    socket.emit('chat message', input);
  }
}


const Bottom = (props) => (
  <footer className="bottom bounding">
    <input type="text" name="message" placeholder="Type a message..." className="message form-control" />
    <div className="send" onClick={(e) => handleMessageSend(e, props)} >Send</div>      
  </footer>
)


export default Bottom;
