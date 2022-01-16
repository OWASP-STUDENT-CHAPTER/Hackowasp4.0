

const question = document.querySelectorAll(".question_nav");
const ansBar = document.querySelector("#ansBar")
const qbar=document.querySelector("#q-bar");

question[0].value={
   q:"This is q1",
   a:"This is a1"
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
try{
function print(toBeDisplayed,i){


    ansBar.innerText = question[i].value.a;
    qBar.innerText = question[i].value.q;
}

for(let i=0;i<6;i++){

    question[i].addEventListener("click",()=>{
        print(question[i].value,i);
    })
}}
catch(err){
    console.log(err);
}
// question[0].addEventListener("click",()=>{
//     console.log("question 1 clicked")
//     // ansBar.innerText = question[0].value.a;
//     // qBar.innerText = question[0].value.q;
//     print(question[0].value.a,0);

// })
// question[1].addEventListener("click",()=>{
//     console.log("question 2 clicked")
//     print(question[1].value.a,1);

// })
// question[2].addEventListener("click",()=>{
//     console.log("question 3 clicked")
//     print(question[2].value.a,2);

// })
// question[3].addEventListener("click",()=>{
//     console.log("question 4 clicked")
//     print(question[3].value.a,3);

// })
// question[4].addEventListener("click",()=>{
//     console.log("question 5 clicked")
//     print(question[4].value.a,4);

// })
// question[5].addEventListener("click",()=>{
//     console.log("question 6 clicked")
//     print(question[5].value.a,5);

// })



