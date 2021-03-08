(function(){
    const dateError = document.getElementById("dateError")
        function getRandomNumber(min,max){
            return Math.round(Math.random() * (1 + max - min) + min);
        }
    try {
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
            const semana = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            pDiaSemana.textContent = semana[diaSemana];
            pDia.textContent = dia;
            const meses = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            pMes.textContent = meses[mes];
            pYear.textContent = year;
            if (horas >= 12) {
                horas = horas - 12
                ampm = "PM";
            } else {
                ampm = "AM";
            }
            if (horas == 0){
                horas = 12;
            }
            if (minutos < 10){
                minutos = "0" + minutos;
            }
            if (segundos < 10){
                segundos = "0" + segundos;
            }
            if (horas < 10){
                horas = "0" + horas;
            }
            pHoras.textContent = horas;
            pAMPM.textContent = ampm;
            pMinutos.textContent = minutos;
            pSegundos.textContent = segundos;
        };
        updateHour();
        let intervalo = setInterval(updateHour, 1000);
        intervalo;
    } catch (err){
        dateError.textContent = err;
    }
    try {
        const factButton = document.getElementById("factButton");
        const fact = document.getElementById("fact")
        factButton.addEventListener("click", ()=>{
            fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(r => {
                return r.json()
            }).then(fact_ => {
                fact.innerHTML = fact_.text
            });
        });
    } catch (err){
        const factError = document.getElementById("factError");
        factError.textContent = err;
    }

    try {
        const memeButton = document.getElementById("memeButton");
        const memeImage = document.getElementById("meme");
        const memeCredits = document.getElementById("memeCredits");
        function getMeme(){
            fetch("https://meme-api.herokuapp.com/gimme").then((results) => {
                console.log(results);
                return results.json();
            }).then(result => {
                if (result.nsfw === true) {
                    result.url = "";
                    memeImage.setAttribute("alt", "Oops, we got a problem!");
                    return;
                }
                if (result.spoiler == true){
                    const spoilerConfirm = confirm("Warning! The next meme was marked as a spoiler. Are you sure you wanna continue?");
                    if (spoilerConfirm == false){
                        return;
                    } else {
                        result.url = ""
                        memeImage.setAttribute("alt", "Oops, we got a problem!")
                        return;
                    }
                }
                console.log(result.url);
                memeImage.setAttribute("src", result.url);
                memeCredits.textContent = `posted by u/${result.author}`;
            })
        }
        memeButton.addEventListener("click", getMeme);
    } catch (err){
        const memeError = document.getElementById("memeError");
        memeError.textContent = err;
    }
    try {
        const animalBtn = document.getElementById("animalBtn");
        const animalImg = document.getElementById("animalImg");
        function getAnimal(){
            const animalSelector = getRandomNumber(1,4);
            if (animalSelector == 1){
                fetch("https://random.dog/woof.json").then(r => {
                    console.log(r)
                    return r.json();
                }).then(doggo => animalImg.setAttribute("src", doggo.url));
            } else if(animalSelector == 2){
            fetch("https://randomfox.ca/floof/").then(results => {
                return results.json();
            }).then(fox => {
                animalImg.setAttribute("src", fox.image);
            })
            } else {
                fetch("https://api.thecatapi.com/v1/images/search").then(results => {
                    console.log(results)
	                return results.json();
                }).then(meow => animalImg.setAttribute("src",meow[0].url));
            }
        }
        animalBtn.addEventListener("click", getAnimal);
    } catch (err){
        const animalError = document.getElementById("animalError");
        animalError.textContent = err;
    }
    try {
        const diceBtn = document.getElementById("diceBtn");
        function rollDice(){
            var diceSelector = getRandomNumber(1,6);
            if (diceSelector == 0){
                diceSelector++;
            } else if(diceSelector > 6 ){
                diceSelector--;
            }
            const diceImg = document.getElementById("diceImg");
            const diceRollAudio = new Audio("./dices/rollDiceAudio.mp3");
            setTimeout(diceRollAudio.play(), 1000);
            diceImg.setAttribute("src", `./dices/Dice ${diceSelector}.png`);
        }
        diceBtn.addEventListener("click", rollDice);
    } catch (err){
        const diceError = document.getElementById("diceError");
        diceError.textContent = err;
    }
    try {
        var x = document.getElementById("qrInput");
        var qrErrorSpan = document.getElementById("errorQR");
        function getQR(){
            var qrImage = document.getElementById("qrImage");
            if (x.value === ""){
                qrErrorSpan.textContent = "Please insert a text";
                function removeError(){
                    qrErrorSpan.textContent = "";
                }
                x.addEventListener("click", removeError);
                return;
            }
            let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${x.value}`;
            qrImage.setAttribute("src", url);
        }
        var qrButton = document.getElementById("qrSubmit");
        qrButton.addEventListener("click", getQR);
    } catch (err){
        qrErrorSpan.textContent = err;
    }
    try {
        var randomNumberError = document.getElementById("randomNumberError");
        const randomNumberButton = document.getElementById("randomNumberButton");
        randomNumberButton.addEventListener('click', function() {
            var randomNumberMinElement = document.getElementById("inputMin");
            var randomNumberMaxElement = document.getElementById("inputMax");
            var randomNumberMax = parseInt(document.getElementById('inputMin').value);
            var randomNumberMin = parseInt(document.getElementById('inputMax').value);
            const result = document.getElementById("randomNumberResult");
            function removeRandomNumberError(){
                randomNumberError.textContent = "";
            }
            if(isNaN(randomNumberMin) || isNaN(randomNumberMax)){
                randomNumberError.textContent = "Both fields are required and both should be numbers";
                randomNumberMinElement.addEventListener("click", removeRandomNumberError);
                randomNumberMaxElement.addEventListener("click", removeRandomNumberError);
                return;
            }
            result.textContent = getRandomNumber(randomNumberMin, randomNumberMax);
        });
    } catch (err){
        randomNumberError.textContent = err;
    }
    try {
        const base64Input = document.getElementById("base64Input");
        const base64Btn = document.getElementById("base64Btn");
        var base64Error = document.getElementById("base64Error");
        const base64Result = document.getElementById("base64Result");
        function getBase64(){
            if(base64Input.value == ""){
                base64Error.textContent = "Please insert a text";
                function removeBase64Error(){
                    base64Error.textContent = "";
                }
                base64Input.addEventListener("click", removeBase64Error);
                return;
            } else {
                base64Result.textContent = btoa(base64Input.value);
            }
        }
        base64Btn.addEventListener("click", getBase64);
    } catch (err){
        base64Error.textContent = err;
    }
    try {
        const atobInput = document.getElementById("atobInput");
        var atobError = document.getElementById("atobError");
        const atobResult = document.getElementById("atobResult");
        const atobBtn = document.getElementById("atobBtn");
        function decodeBase64(){
            if (atobInput.value == ""){
                atobError.textContent = "Please insert a text";
                function removeAtobError(){
                    atobError.textContent = "";
                }
                atobInput.addEventListener("click", removeAtobError);
                return;
            } else {
                atobResult.textContent = atob(atobInput.value);
            }
        }
        atobBtn.addEventListener("click", decodeBase64);
    } catch (err){
        console.error(err);
        atobError.textContent = err;
    }
    try {
        const encodeURIInput = document.getElementById("encodeURIInput");
        const encodeURIResult = document.getElementById("encodeURIResult");
        var encodeURIError = document.getElementById("encodeURIError");
        const encodeURIBtn = document.getElementById("encodeURIBtn");
        function getURI(){
            if (encodeURIInput.value == ""){
                encodeURIError.textContent = "Please insert a text";
                function removeURIError(){
                    encodeURIError.textContent = "";
                }
                encodeURIInput.addEventListener("click", removeURIError);
                return;
            } else {
                encodeURIResult.textContent = encodeURI(encodeURIInput.value);
            }
        }
        encodeURIBtn.addEventListener("click", getURI);
    } catch (err){
        encodeURIError.textContent = err;
    }
    try {
        const decodeURIInput = document.getElementById("decodeURIInput");
        var decodeURIError = document.getElementById("decodeURIError");
        const decodeURIResult = document.getElementById("decodeURIResult");
        const decodeURIBtn = document.getElementById("decodeURIBtn");
        function getDecodedURI(){
            if (decodeURIInput.value == ""){
                decodeURIError.textContent = "Please insert a text";
                function removeDecodeURIError(){
                    decodeURIError.textContent = "";
                }
                decodeURIInput.addEventListener("click", removeDecodeURIError);
                return;
            } else {
                decodeURIResult.textContent = decodeURI(decodeURIInput.value);
            }
        }
        decodeURIBtn.addEventListener("click", getDecodedURI);
    } catch (err){
        decodeURIError.textContent = err;
    }
    try {
        const randomWebsites = ["http://corndog.io/", "http://eelslap.com/", "http://randomcolour.com/", "http://ihasabucket.com/", "http://beesbeesbees.com/", "http://drawing.garden/", "https://pointerpointer.com/", "https://cat-bounce.com/", "https://imaninja.com/", "http://www.ismycomputeron.com/", "https://strobe.cool/", "https://potatoortomato.com/", "http://www.yesnoif.com/", "http://wutdafuk.com/", "http://unicodesnowmanforyou.com/", "https://iamawesome.com/", "http://tencents.info/", "http://chillestmonkey.com/", "https://crouton.net/", "http://www.crossdivisions.com/", "http://pixelsfighting.com/", "http://www.blankwindows.com/","http://lacquerlacquer.com/", "http://chihuahuaspin.com/", "http://tunnelsnakes.com/", "https://www.ascii-middle-finger.com/", "http://dogs.are.the.most.moe/", "http://onemillionlols.com/", "http://yeahlemons.com/","http://www.donothingfor2minutes.com/", "http://nooooooooooooooo.com/", "https://www.bouncingdvdlogo.com/", "https://dadlaughbutton.com/", "http://spaceis.cool/", "http://www.amialright.com/", "https://zoomquilt.org/", "https://remoji.com/", "http://papertoilet.com/", "https://heeeeeeeey.com/", "https://weirdorconfusing.com/", "http://www.staggeringbeauty.com/", "http://burymewithmymoney.com/", "https://thatsthefinger.com/", "https://smashthewalls.com/", "http://endless.horse/", "https://alwaysjudgeabookbyitscover.com/", "https://jacksonpollock.org/", "http://www.partridgegetslucky.com/", "http://www.movenowthinklater.com/", "http://www.rrrgggbbb.com/", "http://www.republiquedesmangues.fr/", "https://chrismckenzie.com/", "https://mondrianandme.com/", "http://ninjaflex.com/", "http://www.koalastothemax.com/", "http://corndogoncorndog.com/", "http://www.everydayim.com/", "http://hasthelargehadroncolliderdestroyedtheworldyet.com/", "https://corgiorgy.com/", "http://www.omfgdogs.com/#", "http://scroll-o-meter.club/", "http://www.trashloop.com/", "https://killyourbrowser.netlify.app/"];
        const randomWebsitesDescriptionArray = ["Corndog", "Slaap a guy with an eel", "Get a random colour", "he have a bucket", "BEES!!", "Draw as you hover your mouse throw the site", "Always pointing at your cursor", "Bouncy bounce cats", "He's a ninja!!!!!!!", "See if your computer is on", "ASH é€´ é«Ã! é6í é±¦ é<", "Is that a potato or a tomato?", "idk how to describe it", "wut da fuk is dis", "An unicode snowman because why not", "You're awesome :D", "Literally just 10 cents", "He do be chillin", "Me when the C R O U T O N", "Also, I don't know how to describe this", "Pixels fight wooooooooooooo", "Why are there so many sites that idk how to describe", "Painting nails bc why not", "Chihuahua spinning", "Tunnel snakes rule!", "Send this to someone you hate", "Pet a dog :D", "LOL * 1e6", "When life gives you lemons, make a website...?", "Do nothing for 2 minutes. Just nothing.", "Nooooooooooooooooooooo :(","still waiting for it to bounce on a corner", "dad laugh.mp3", "Earth rotating around the sun", "See if you're alright", "Endless zoooooom", "Draw with emojis as you hover your mouse", "Roll it like a kitty", "hey ho!", "Weird things on ebay for no reason bryh", "Warning: Flashing images ahead.", "Bury him with his money", "Be carefull!", "You're angry but you don't wanna damage something. Try this page.", "Endless horse", "Why not tho", "Make some art with your cursor.", "Literally ust partridge dancing to \"Lucky\"", "And again, idk how to describe it.", "Saying RGB as you hover with your mouse", "Mangoooooooooooooooooos", "This cube loves seeing at your cursor", "why idk how to describe so many pages", "Ninja and flex", "Hover the dots to show a koala image", "More corndogs", "Every day he's", "What a nice question. You'll see a yes when it happens.", "CORGIS AND CORGIIIS", "Random dogs running because why not", "How much can you scroll?", "You'll never do it", "Made by me for no reason lol"];
        const randomWebsitesDescriptionSpan = document.getElementById("randomWebsiteDescription");
        const randomWebsiteBtn = document.getElementById("randomWebsiteBtn");
        const randomWebsiteA = document.getElementById("randomWebsiteA")
        var randomWebsiteError = document.getElementById("randomWebsiteError")
        function getRandomWebsite(){
            
            let randomWebsiteSelector = getRandomNumber(0,randomWebsites.length);
            if (randomWebsiteSelector < 0){
                randomWebsiteSelector++;
            } else if(randomWebsiteSelector > randomWebsites.length){
                randomWebsiteSelector--;
            }
            randomWebsiteA.setAttribute("href", randomWebsites[randomWebsiteSelector]);
            randomWebsiteA.textContent = randomWebsites[randomWebsiteSelector]
            randomWebsitesDescriptionSpan.textContent = randomWebsitesDescriptionArray[randomWebsiteSelector]
        }
        randomWebsiteBtn.addEventListener("click", getRandomWebsite)
    } catch (err) {
        randomWebsiteError.textContent = err
    }
    try {
        var jsTesterError = document.getElementById("jsTesterError");
        const jsTesterTextArea = document.getElementById("jsTesterTextArea");
        const jsTesterBtn = document.getElementById("jsTesterBtn");
        function executeJsTester(){
            try {
                eval(jsTesterTextArea.value);
            } catch (err){
                jsTesterError.textContent = err;
            }
            function removeJsTesterError(){
                jsTesterError.textContent = "";
            }
            jsTesterTextArea.addEventListener("click", removeJsTesterError);
        }
        jsTesterBtn.addEventListener("click", executeJsTester)
    } catch (err){
        jsTesterError.textContent = err;
        console.error(err);
    }
    try{
        const top = document.getElementById("top");
        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        top.addEventListener("click", scrollToTop);
    }catch(err){
        const topError = document.getElementById("topError");
        topError.textContent = err
    }
}());