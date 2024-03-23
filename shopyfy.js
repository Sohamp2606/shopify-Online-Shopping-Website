

// -->>  slideshow 
let slideindex = 0;

function showslides (){
    let slides =
        document.getElementsByClassName("slides");
    let dot = document.getElementsByClassName("dot");
    
    for(let i =0; i< slides.length; i++){
        slides[i].style.display = "none"
    }
    slideindex++;
    if (slideindex >slides.length){
        slideindex = 1;
    }
    slides[slideindex-1].style.display ="block";
    setTimeout(showslides ,2000);
}

showslides();

const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobilenav");

hamburger.addEventListener("click",()=>{
    mobilenav.classList.toggle("opendrawer");
})