// Working with Date and DOM for the Date Section
function updateHour(){
    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    var pHoras = document.getElementById("hora"),
        pAMPM = document.getElementById("ampm"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pYear = document.getElementById("year");

    const semana = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    pDiaSemana.textContent = semana[diaSemana]
    pDia.textContent = dia

    const meses = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    pMes.textContent = meses[mes]

    pYear.textContent = year

    if (horas >= 12) {
        horas = horas - 12
        ampm = "PM"
    } else {
        ampm = "AM"
    }
    if (horas == 0){
        horas = 12
    }
    if (minutos < 10){
        minutos = "0" + minutos
    }
    if (segundos < 10){
        segundos = "0" + segundos
    }
    if (horas < 10){
        horas = "0" + horas
    }
    pHoras.textContent = horas
    pAMPM.textContent = ampm
    pMinutos.textContent = minutos
    pSegundos.textContent = segundos

};
updateHour()
let intervalo = setInterval(updateHour, 1000);


//Math properties and DOM to the button that generates random numbers
let randomNumberbutton = document.getElementById("randomNumberbutton")
function alertRandomNumber(){
    alert(Math.round(Math.random() * (1 + 100 - 1)))
}
randomNumberbutton.addEventListener("click", alertRandomNumber);

//QR Generator
function getQR(){
    let x = document.getElementById("qrInput").value
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${x}`
    let qrImage = document.getElementById("qrImage")
    qrImage.setAttribute("src", url)
}
let qrButton = document.getElementById("qrSubmit")
qrButton.addEventListener("click", getQR)