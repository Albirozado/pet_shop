
let menu = document.querySelector(".links")
document.querySelector(".menu").onclick = () =>{
    menu.classList.toggle("active")
}
onscroll = () =>{
    menu.classList.remove("active")
}
