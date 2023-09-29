let width1 = document.querySelector(".width")
let height1 = document.querySelector(".height")
let color1 = document.querySelector(".color")
let btn = document.querySelector("button")
let box = document.querySelector(".box")
let k;
let h;
let bc;


function inpText() {
    width1.addEventListener('keyup', function (event) {
        k = event.target.value
    })
    height1.addEventListener('keyup', function (event) {
        h = event.target.value
    })
    color1.addEventListener('keyup', function (event) {
        bc = event.target.value
    })
}

inpText()

btn.addEventListener('click', (event) => {
    event.preventDefault()

    console.log(k);
    console.log(h);
    console.log(bc); 
    box.style.width = k
    box.style.height = h
    box.style.backgroundColor = bc
})