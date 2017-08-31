import React from 'react';


function handleMessageSend(e) {
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
  }
}


const Bottom = (props) => (
  <div className="bottom bounding">
      <input type="text" name="message" placeholder="Type a message..." className="message form-control " />
      <div className="send" onClick={(e) => handleMessageSend(e)} >Send</div>
  </div>
)


export default Bottom;
