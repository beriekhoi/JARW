(function(){
    try {
        function getRandomNumber(min,max){
            return Math.round(Math.random() * (1 + max - min))
        }
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

    //Random Fact generator
    const facts = ["all bacteria on earth weigh more than all mammals", " you can fit a whole library on a usb drive (not phisically of course)","Pigs cant look straight up", "the internet weighs 51 gram", "the longest prison sentence ever was 141,078 years!", "the coldest temperature ever recorded on earth was on Antarctica -89.2°C (-128.6°F)", "In 1325, two italian cities had a conflict because of a stolen bucket which resulted in 2000 deaths", "Cuba and North Korea are the only countries where you can't buy Coca-Cola", "the deepest hole created was 12 km (7.5 miles) when soviet scientists wanted to reach the earths mantle, but the temperature and pressure became so high that the machinery could no longer work", "the longest recorded war in human history lasted for 774 years", "the shortest war lasted for only 38 minutes", "the space bar is the most used key on a keyboard. E is the most used letter", "Bees actually consent to being kept for their honey. If at any point the queen bee doesn't like the place she's staying at (too warm, too cold, too crammed, etcetera), she leaves. And with her, the whole hive leaves. So if a bee hive is staying with a beekeeper, it's because the beekeeper is doing a good job and the bees consider it the best place to stay at.", "There’s a gene named Sonic Hedgehog. There was a gene called Pokemon, but the Pokémon company forced them to rename it because it was linked to the devolpment of cancer. There’s a gene called Indy; it’s short for I’m Not Dead Yet. There’s a gene called Ken and Barbie (it’s only one gene). There’s a protein called Pikachurin. There’s a protein called Nemo. There’s a family of proteins called Elmo (the members: Elmo1, Elmo2 and Elmo3). There’s a protein called Diablo. There are 9 proteins called Mothers against decapentaplegic (1 through 9), and each has an associated Daughter against decapentaplegic. There are 2 proteins that interact with Mothers against decapentaplegic 7: Smurf1 and Smurf2. There’s a protein called Spock1. There’s an acid called Traumatic acid. There’s a dinosaur called Aerodactylus, named after the Pokémon Aerodactyl. There’s a fungus called Spongiforma Squarepantsii, named after SpongeBob SquarePants. There’s a worm called Yoda Purpurata, named after Yoda from Star Wars", "there is about 0.1 mg of gold in your body", "your body contains about the same amount of iron as a 7cm long nail", "more people visit France than any other country", " the oldest cat was 38 years old", "the heaviest cat was 21.3 kg", "the lightest helicopter is the Gen H-4S, it weighs about 70 kg", "the lightest car is the Peel P-50, it weighs 56 kg", " the lightest motorcycle weighs 1kg and has 0.3 horsepower", " there is a place called Poggersdorf, it is located in Austria", "There's a place called Yeetus Road, in Utah", "there is a house called Bruh City", "there is a school called Uno Reverse Card", "there is a Peepee Poopoo company", "there is a website where you can buy poop (https://poopsenders.com)", "on March 3rd 2000, Gregory W. Nemitz claimed an asteroid named 433 Eros. Less than a year later, NASA landed a probe on the asteroid. Nemitz called it parking space 29, and sent NASA a $20 parking ticket", "if a coin hit earth at light speed, it would create an explosion as big as the atom bomb dropped on Hiroshima", "if humans held hands together to form 1 big circle around earth, we would need only 0.5% of the world population for that. In fact, if every human held hands together, we would form a circle with a radius of more than 1,200,000 km. In comparison, the moon orbit is about 385,000 km", "The library of Babel is a website built by Jonathan Basile that contains everything that has been or could be written. It contains any 3200 character combination including all letters, the space, comma and period. In total, it offers 10^5000 different pages. In comparison, there are only 10^80 atoms in the observable universe. https://libraryofbabel.info", "on Venus, every day is your birthday, as a venus day is 243 earth days and a venus year is only 224 earth days", "no one ever touches anything because of the fact that atoms repel each other", "Neil Armstrong left 4 bags of poop on the moon", "in Japan and Singapore it is illegal to not flush a public toilet after using it", "in 4 billion years, the milky way will collide with Andromeda, this new galaxy will be called Milkdromeda", "During the Algerian War, a French company called Ateliers de Construction de Motocycles et Automobiles (ACMA) created a motorcycle with an anti tank cannon called Vespa 150 TAP", "Your brain can't create faces that you haven't seen. That means that if you dream with the face of a person it's because you've already seen them somewhere.", "There's a book called Gadsby, which does not include the letter E in any of it's words. It's a real masterpiece since the letter E is the most common letter in English"]
    const factButton = document.getElementById("factButton")
    const fact = document.getElementById("fact")
    function getRandomFact(){
        let factSelector = getRandomNumber(1,facts.length)
        if (factSelector == 0){
            factSelector++
        } else if(factSelector > facts.length){
            factSelector--
        }
        fact.textContent = facts[factSelector]
    }
    factButton.addEventListener("click",getRandomFact)
    
    //Math properties and DOM to the button that generates random numbers
    const diceBtn = document.getElementById("diceBtn")

    function rollDice(){
        var diceSelector = getRandomNumber(1,6)
        if (diceSelector == 0){
            diceSelector++
        }
        const diceImg = document.getElementById("diceImg")
        const diceRollAudio = new Audio("./dices/rollDiceAudio.mp3")
        setTimeout(diceRollAudio.play(), 1000)
        diceImg.setAttribute("src", `./dices/Dice ${diceSelector}.png`)
    }
    diceBtn.addEventListener("click", rollDice)
    
    //QR Generator
    var x = document.getElementById("qrInput")
    function getQR(){
        var qrImage = document.getElementById("qrImage")
        if (x.value === ""){
            const qrErrorSpan = document.getElementById("errorQR")
            qrErrorSpan.textContent = "Please insert a text"
            function removeError(){
                qrErrorSpan.textContent = ""
            }
            x.addEventListener("click", removeError)
            return
        }
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${x.value}`
        qrImage.setAttribute("src", url)
    }
    var qrButton = document.getElementById("qrSubmit")
    qrButton.addEventListener("click", getQR)
    } catch (err){
        alert(`Oops! We ran into an error: ${err}`)
        console.error(err);
    }
}())