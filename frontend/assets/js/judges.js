const panel1 = document.querySelectorAll(".polygon-wrapper-1");
const panel2 = document.querySelectorAll(".polygon-wrapper-2");
panel1.forEach((panel)=>{
    panel.addEventListener('mouseover',()=>{
        removeActiveClasses();
        panel.classList.add('selected');
    })
})
function removeActiveClasses(){
    panel1.forEach(panel=>{
        panel.classList.remove('selected');
    })
}