function suprise() {
    console.log("suprise")
}
window.onload=suprise()

function popup() {
    alert("hoi");
}
setInterval(popup,10000)

const btn = document.querySelector("#btn")

function changecolor(){
    document.body.style.backgroundColor = "purple"

}
btn.addEventListener("click",changecolor)

const home = document.querySelector(".home")
home.addEventListener("click", popup2)












