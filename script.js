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
        const facts = ["all bacteria on earth weigh more than all mammals", " you can fit a whole library on a usb drive (not phisically of course)","Pigs cant look straight up", "the internet weighs 51 gram", "the longest prison sentence ever was 141,078 years! A thai woman called Chamoy Thipyaso created a pyramid scheme, which after being caught she was sentenced. So sad life is unfair and she only stayed 8 years in jail.", "the coldest temperature ever recorded on earth was on Antarctica -89.2°C (-128.6°F)", "In 1325, two italian cities had a conflict because of a stolen bucket which resulted in 2000 deaths", "Cuba and North Korea are the only countries where you can't buy Coca-Cola", "the deepest hole created was 12 km (7.5 miles) when soviet scientists wanted to reach the earths mantle, but the temperature and pressure became so high that the machinery could no longer work", "the longest recorded war in human history lasted for 774 years", "the shortest war lasted for only 38 minutes", "the space bar is the most used key on a keyboard. E is the most used letter", "Bees actually consent to being kept for their honey. If at any point the queen bee doesn't like the place she's staying at (too warm, too cold, too crammed, etcetera), she leaves. And with her, the whole hive leaves. So if a bee hive is staying with a beekeeper, it's because the beekeeper is doing a good job and the bees consider it the best place to stay at.", "There’s a gene named Sonic Hedgehog. There was a gene called Pokemon, but the Pokémon company forced them to rename it because it was linked to the devolpment of cancer. There’s a gene called Indy; it’s short for I’m Not Dead Yet. There’s a gene called Ken and Barbie (it’s only one gene). There’s a protein called Pikachurin. There’s a protein called Nemo. There’s a family of proteins called Elmo (the members: Elmo1, Elmo2 and Elmo3). There’s a protein called Diablo. There are 9 proteins called Mothers against decapentaplegic (1 through 9), and each has an associated Daughter against decapentaplegic. There are 2 proteins that interact with Mothers against decapentaplegic 7: Smurf1 and Smurf2. There’s a protein called Spock1. There’s an acid called Traumatic acid. There’s a dinosaur called Aerodactylus, named after the Pokémon Aerodactyl. There’s a fungus called Spongiforma Squarepantsii, named after SpongeBob SquarePants. There’s a worm called Yoda Purpurata, named after Yoda from Star Wars", "there is about 0.1 mg of gold in your body", "your body contains about the same amount of iron as a 7cm long nail", "more people visit France than any other country", " the oldest cat was 38 years old", "the heaviest cat was 21.3 kg", "the lightest helicopter is the Gen H-4S, it weighs about 70 kg", "the lightest car is the Peel P-50, it weighs 56 kg", " the lightest motorcycle weighs 1kg and has 0.3 horsepower", " there is a place called Poggersdorf, it is located in Austria", "There's a place called Yeetus Road, in Utah", "there is a house called Bruh City", "there is a school called Uno Reverse Card", "there is a Peepee Poopoo company", "there is a website where you can buy poop (https://poopsenders.com)", "on March 3rd 2000, Gregory W. Nemitz claimed an asteroid named 433 Eros. Less than a year later, NASA landed a probe on the asteroid. Nemitz called it parking space 29, and sent NASA a $20 parking ticket", "if a coin hit earth at light speed, it would create an explosion as big as the atom bomb dropped on Hiroshima", "if humans held hands together to form 1 big circle around earth, we would need only 0.5% of the world population for that. In fact, if every human held hands together, we would form a circle with a radius of more than 1,200,000 km. In comparison, the moon orbit is about 385,000 km", "The library of Babel is a website built by Jonathan Basile that contains everything that has been or could be written. It contains any 3200 character combination including all letters, the space, comma and period. In total, it offers 10^5000 different pages. In comparison, there are only 10^80 atoms in the observable universe. https://libraryofbabel.info", "on Venus, every day is your birthday, as a venus day is 243 earth days and a venus year is only 224 earth days", "no one ever touches anything because of the fact that atoms repel each other", "Neil Armstrong left 4 bags of poop on the moon", "in Japan and Singapore it is illegal to not flush a public toilet after using it", "in 4 billion years, the milky way will collide with Andromeda, this new galaxy will be called Milkdromeda", "During the Algerian War, a French company called Ateliers de Construction de Motocycles et Automobiles (ACMA) created a motorcycle with an anti tank cannon called Vespa 150 TAP", "Your brain can't create faces that you haven't seen. That means that if you dream with the face of a person it's because you've already seen them somewhere.", "There's a book called Gadsby, which does not include the letter E in any of it's words. It's a real masterpiece since the letter E is the most common letter in English", "The lights on the eiffel tower are copyrighted."];
        const factButton = document.getElementById("factButton");
        const fact = document.getElementById("fact");
        function getRandomFact(){
            let factSelector = getRandomNumber(1,facts.length);
            if (factSelector == 0){
                factSelector++;
            } else if(factSelector > facts.length){
                factSelector--;
            }
            fact.textContent = facts[factSelector];
        }
    factButton.addEventListener("click",getRandomFact);
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
}())