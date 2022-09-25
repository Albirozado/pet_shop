
let menu = document.querySelector(".links")
document.querySelector(".menu").onclick = () =>{
    menu.classList.toggle("active")
}
onscroll = () =>{
    menu.classList.remove("active")
}

function loanding(){
    document.querySelector(".loader").style.display = "none"
    document.querySelector(".tudo").style.display = "block"

}


