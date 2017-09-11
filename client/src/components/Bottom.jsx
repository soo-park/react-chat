import React from 'react';

function handleMessageSend(e, props) {
  console.log(props, "is the props in the Bottom");
  var socket = props.socket;

  e.preventDefault();
  var input = $(".message").val();
  
  if(!input) {
    console.log("username not entered");
  } else {
    // cross site scripting prevention
    var xssFilters = require('xss-filters');
    input = xssFilters.inHTMLData(input);

    var line = "<div class='my-message message-balloon'>" + input + "</div>";
    $(".message-box").append(line);
    $(".message").val('');

    // FIXME: use socket io for text emition (currently broadcast errors)
    // var socket = io();
    socket.emit('chat message', input);

    // move this to on change, once built
    // receive the emition and deal with it once broadcast issue is fixed
    // socket.on('chat message', function(msg){
    //   console.log(msg);
      // $('#messages-box').append(line);
    // })
  }
}


const Bottom = (props) => (
  <div className="bottom bounding">
      <div className="send" onClick={(e) => handleMessageSend(e, props)} >Send</div>
      <input type="text" name="message" placeholder="Type a message..." className="message form-control " />
  </div>
)


export default Bottom;
