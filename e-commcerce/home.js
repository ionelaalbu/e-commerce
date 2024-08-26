let first=document.querySelector(".first-bg")
let second=document.querySelector(".second-bg")
let third=document.querySelector(".third-bg")
let pic=document.querySelector(".pictures")


second.classList.add("none")
third.classList.add("none")
function m1(){
    first.style.display="none"
    second.style.display="block"
    third.style.display="none"
    console.log("first pic");
    pic.classList.add('position1')
    pic.classList.remove('position2')
}
function m2(){
    second.style.display="none"
    first.style.display="block"
    third.style.display="none"
    console.log("second pic");
    pic.classList.remove('position1')
    pic.classList.add('position2')
}

function m3(){
    second.style.display="none"
    first.style.display="none"
    third.style.display="block"
    console.log("third pic");
    pic.classList.add('position1')
    pic.classList.remove('position2')
}



