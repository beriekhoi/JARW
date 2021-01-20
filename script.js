// Working with Date and DOM for the Date Section
let dateElement = document.getElementById("date")
let dateTextNode = document.createTextNode(new Date())
dateElement.appendChild(dateTextNode)

//Math properties and DOM to the button that generates random numbers
let randomNumberbutton = document.getElementById("randomNumberbutton")
function alertRandomNumber(){
    alert(Math.round(Math.random() * (1 + 100 - 1)))
}
randomNumberbutton.addEventListener("click", alertRandomNumber)