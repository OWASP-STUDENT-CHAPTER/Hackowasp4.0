const question = document.querySelectorAll('.question_nav');
const ansBar = document.querySelector('.answer-box');
const qBar = document.querySelector('.question-box');
const ansBar2 = document.querySelector('.abox2');
const qBar2 = document.querySelector('.qbox2');

question[0].value = {
  q1: 'What is the team size for HackOwasp 4.0?',
  a1: 'A Team can consist of 2-4 members.',
  q2: 'What if I have no team?',
  a2: 'We will club individual members and you may form a team in our discord server as well.',
};
question[1].value = {
  q: 'Are Cross-college teams allowed?',
  a: 'Definitely! We at Owasp encourage collaboration and teamwork.',
};
question[2].value = {
  q: 'Will the event be completely online or does it have an offline component? ',
  a: 'The event will be held in online mode only.',
};
question[3].value = {
  q: 'Do I need to pay any registration fee to register for the HackOwasp?',
  a: 'No, its free of cost.',
};
question[4].value = {
  q: 'Do I need Experience?',
  a: 'No, you do not need any prior development experience. We will assign you mentors to assist you in figuring things out. Of course, willingness to think, learn, and cooperate is a cherry on the top.',
};
question[5].value = {
  q1: 'What kind of projects can we work on?',
  a1: 'You can choose from any of our problem statements that will be released prior to our Hackathon or you can come up with your idea as well!',
  q2: 'Can I start working on my hack before the hackathon?',
  a2: 'No. You must start working on your project after the start of hack only.',
};
question[6].value = {
  q: 'Will the teams be provided with any assistance during Hackathon? ',
  a: 'We will have plenty of mentors and resources accessible, along with several workshops to guide the participants.',
};
question[7].value = {
  q: 'Do we have to have a working prototype / App / Website of our product?',
  a: 'Yes, You will need a functioning prototype of how your product/idea works to pitch it to the judges in the final round.',
};
question[8].value = {
  q: 'On what basis will the winners be selected? ',
  a: 'The winners of HackOwasp 4.0 will be selected based on Evaluation criteria which will include novelty of the idea, complexity, clarity, and details in the prescribed format, feasibility, practicability, sustainability, the scale of impact, user experience, and potential for prospects.',
};
var c = 0;
function print(i) {
  // question[i].style.backgroundColor="red";
  ansBar2.style.display = 'none';
  qBar2.style.display = 'none';
  question[c].classList.remove('colorClass');

  c = i;
  question[i].classList.add('colorClass');
  ansBar.innerText = question[i].value.a;
  qBar.innerText = question[i].value.q;
}
function print1(i) {
  question[c].classList.remove('colorClass');

  c = i;
  question[i].classList.add('colorClass');
  ansBar.innerText = question[i].value.a1;
  qBar.innerText = question[i].value.q1;
  ansBar2.style.display = 'block';
  ansBar2.innerText = question[i].value.a2;
  qBar2.style.display = 'block';
  qBar2.innerText = question[i].value.q2;
}

for (let i = 0; i < 9; i++) {
  question[i].addEventListener('click', () => {
    if (i == 0 || i == 5) print1(i);
    else print(i);
  });
}
