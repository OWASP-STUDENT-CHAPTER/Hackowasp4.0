var $messages = $('.chatmessage');
var serverResponse = "wala";
const chatMessages = document.querySelector('.chatmessage');

var suggession;
//speech reco
// try {
//   var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   var recognition = new SpeechRecognition();
// }
// catch(e) {
//   console.error(e);
//   $('.no-browser-support').show();
// }

// $('#start-record-btn').on('click', function(e) {
//   recognition.start();
// });

// recognition.onresult = (event) => {
//   const speechToText = event.results[0][0].transcript;
//  document.getElementById("MSG").value= speechToText;
//   //console.log(speechToText)
//   insertMessage()
// }


// function listendom(no){
//   console.log(no)
//   //console.log(document.getElementById(no))
//   document.getElementById("MSG").value= no.innerHTML;
//   insertMessage();
// }

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    serverMessage("Hello..!! Welcome to HackOwasp 4.0 chat assistance, How may I help you?");
  }, 100);

});

// function updateScrollbar() {
//   $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
//     scrollInertia: 10,
//     timeout: 0
//   });
//   console.log('updating scrollBar');

// }



function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  // speechSynthesis.speak( new SpeechSynthesisUtterance(msg));
  $('<div class="question">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  fetchmsg() 
  
  $('.message-input').val(null);
  // updateScrollbar();
  chatMessages.scrollTop = chatMessages.scrollHeight;
  

}

document.getElementById("mymsg").onsubmit = (e)=>{
  e.preventDefault() 
  insertMessage();
  // serverMessage("hello");
  // speechSynthesis.speak( new SpeechSynthesisUtterance("hello"))
}

function serverMessage(response2) {


  if ($('.message-input').val() != '') {
    return false;
  }
  // $('<div class="ans loading"></div>').appendTo($('.mCSB_container'));
  // updateScrollbar();
  // chatMessages.scrollTop = chatMessages.scrollHeight;

  

  setTimeout(function() {
    // $('.message.loading').remove();
    $('<div class="ans">' + response2 + '</div>').appendTo($('.mCSB_container')).addClass('new');
    // updateScrollbar();
    chatMessages.scrollTop = chatMessages.scrollHeight;

  }, 100 + (Math.random() * 20) * 100);

}


function fetchmsg(){
    // const port = process.env.PORT || 5000;
    console.log('hello');
    //  var url = 'http://localhost:5000/send-msg';
     var url = 'https://hacko-bot.herokuapp.com/send-msg';
      
      const data = new URLSearchParams();
      for (const pair of new FormData(document.getElementById("mymsg"))) {
          data.append(pair[0], pair[1]);
          console.log(pair)
      }
    
      console.log("abc",data)
        fetch(url, {
          method: 'POST',
          body:data
        }).then(res => res.json())
         .then(response => {
          console.log(response);
         serverMessage(response.Reply);
          // speechSynthesis.speak( new SpeechSynthesisUtterance(response.Reply))
        
          
         })
          .catch(error => console.error('Error h:', error));

}