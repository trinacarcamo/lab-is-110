const btnleft = document.querySelector(".btn-left"),
      btnright = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      slidersection = document.querySelector(".slider-section");

btnleft.addEventListener("click", e => moveToLeft())
btnright.addEventListener("click", e => moveToRight())

let operacion = 0,
    counter = 0,
    length = 2,
    widthImg = 100 / length;

function moveToRight() {
    if (counter >= length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}  

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = length-1;
        operacion = widthImg * (length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"  
}   