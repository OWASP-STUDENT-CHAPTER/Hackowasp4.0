


const question = document.querySelectorAll(".question_nav");
const ansBar = document.querySelector(".answer-box")
const qBar=document.querySelector(".question-box");

question[0].value={
   q:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptas, deserunt repudiandae sequi quod amet. Ducimus libero dolorem tempora, nemo consectetur quos. Sequi quam officiis, blanditiis dignissimos praesentium quas dolore?",
   a:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptas, deserunt repudiandae sequi quod amet. Ducimus libero dolorem tempora, nemo consectetur quos. Sequi quam officiis, blanditiis dignissimos praesentium quas dolore?"
}
question[1].value={
   q:"This is q2",
   a:"This is a2"
}
question[2].value={
   q:"This is q3",
   a:"this is a3"
}
question[3].value={
   q:"This is q4",
   a:"this is a4"
}
question[4].value={
   q:"This is q5",
   a:"this is a5"
}
question[5].value={
   q:"This is q6",
   a:"this is a6"
}
var c=0;
function print(i){

   // question[i].style.backgroundColor="red";
   question[c].classList.remove("colorClass")
  
   c=i;
   question[i].classList.add("colorClass")
   ansBar.innerText = question[i].value.a;
   qBar.innerText = question[i].value.q;
   
}

for(let i=0;i<6;i++){
   
   question[i].addEventListener("click",()=>{
            
        print(i);
    })
}





