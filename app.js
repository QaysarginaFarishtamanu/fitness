let reponsive = document.querySelector(".responsive")
let headerbtn = document.querySelector(".header-btn")
let reponsiveimg = document.querySelector(".responsive-img")

headerbtn.addEventListener("click" , function(){
    reponsive.classList.add("active")
})

reponsiveimg.addEventListener("click" , function(){
    reponsive.classList.remove("active")
})

let owewflov = document.querySelector("body")


reponsiveimg.addEventListener("click" , function(){
    owewflov.classList.remove("activ")
})

headerbtn.addEventListener("click" , function(){
    owewflov.classList.add("activ")
})