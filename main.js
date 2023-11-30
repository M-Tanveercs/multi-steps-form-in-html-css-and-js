let slidePage = document.querySelector(".slide-page");
let nextBtnFirst=document.querySelector('.firstNext')
let prevBtnSec = document.querySelector(".prev-1");
let nextBtnSec = document.querySelector(".next-1");
let prevBtnThird = document.querySelector(".prev-2 ");
let nextBtnThird = document.querySelector(".next-2");
let prevBtnfourth = document.querySelector(".prev-3 ");
let submitBtn = document.querySelector(".submit");
// let progressCheck=document.querySelector(".step .check")
// let progressText=document.querySelector(".step .p")
// let bullets = document.querySelector(".step .bullet");
let bullets = document.querySelectorAll(".progress-bar .step .bullet");
let progressText = document.querySelectorAll(".progress-bar .step p");
let progressCheck = document.querySelectorAll(".progress-bar .step .check");
let current=1;
console.log(bullets);
nextBtnFirst.addEventListener('click',function(e){
    e.preventDefault()
    slidePage.style.marginLeft='-25%'
    bullets[current-1].classList.add("active")
    progressText[current-1].classList.add("active")
    progressCheck[current-1].classList.add("active")
current+=1;
})
nextBtnSec.addEventListener("click",function(event){
    event.preventDefault()
    slidePage.style.marginLeft='-50%'
    bullets[current-1].classList.add("active")
    progressText[current-1].classList.add("active")
    progressCheck[current-1].classList.add("active")
    current+=1;
})

nextBtnThird.addEventListener("click",function(event){
    event.preventDefault()
    slidePage.style.marginLeft="-75%"
    bullets[current-1].classList.add("active")
progressCheck[current-1].classList.add("active")
progressText[current-1].classList.add("active")
current+=1
})
submitBtn.addEventListener("click",function(){
    
    bullets[current-1].classList.add("active")
    progressCheck[current-1].classList.add("active")
    progressText[current-1].classList.add("active")
current+=1
console.log("submit");
setTimeout(function(){
    alert("your form is successfully Sign up")
    location.reload()
},800)
})
prevBtnSec.addEventListener("click",function(e){
    e.preventDefault()
    slidePage.style.marginLeft="0%"
    bullets[current-2].classList.remove("active")
    progressCheck[current-2].classList.remove("active")
    progressText[current-2].classList.remove("active")
    current-=1 
})
prevBtnThird.addEventListener("click",function(e){
    e.preventDefault()
    slidePage.style.marginLeft="-25%"
    bullets[current-2].classList.remove("active")
    progressCheck[current-2].classList.remove("active")
    progressText[current-2].classList.remove("active")
    current-=1
}) 
prevBtnfourth.addEventListener("click",function(e){
    e.preventDefault()
    slidePage.style.marginLeft="-50%"
    bullets[current-2].classList.remove("active")
    progressCheck[current-2].classList.remove("active")
    progressText[current-2].classList.remove("active")
    current-=1
});
