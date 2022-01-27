const chatbox = document.getElementById('chatarea');
const chatbtn = document.getElementById('chatbtn');
const closebtn = document.getElementById('closebtn');

chatbtn.addEventListener('click', ()=>{
    chatbox.style.display="block";
});

closebtn.addEventListener('click', ()=>{
    chatbox.style.display="none";
});

  