const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded",initializeslider);

function initializeslider(){
    if(slides.length>0){
    slides[slideindex].classList.add("displayslide");
    intervalID = setInterval(nextslide,4000);
    }
}

function showslides(index){
    if(index >= slides.length){
        slideindex=0;
    }
    else if(index<0){
        slideindex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displayslide");
    })
    slides[slideindex].classList.add("displayslide");
}

function prevslide(){
    // clearInterval(intervalID);
slideindex--;
showslides(slideindex);
}

function nextslide(){
    slideindex++;
    showslides(slideindex);
}

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(event) => {
        event.preventDefault();
        item.scrollLeft += event.deltaY;
    })
}

const scrollContainer2 = document.querySelectorAll('.products1');
for(const item of scrollContainer2){
    item.addEventListener('wheel',(event) => {
        event.preventDefault();
        item.scrollLeft += event.deltaY;
    })
}
// const initslider = () => {
//     const imageslist = document.querySelector(".line6 .slide-2");
//     const slidebuttons = document.querySelectorAll(".line6 .slide-button");

//     slidebuttons.forEach(button =>{
//         button.addEventListener("click",()=>{
//             const direction = button.id === "prevslide" ? -1 : 1;
//             const scrollAmount = imageslist.clientWidth * direction;
//             imageslist.scrollBy({left: scrollAmount,behavior: "smooth" })
//         })
//     })
// }

