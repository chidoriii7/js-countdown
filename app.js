// Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
// Potete stampare il messaggio in pagina con un semplice alert.
// Bonus 1
// Mostrate il conteggio alla rovescia in pagina;
// Bonus 2
// Aggiungete un bottone che interrompe il count down e mostra il messaggio;


// <!-- variabili -->


const start = document.getElementById('start');
const stopbutton = document.getElementById('stop');
const restart = document.getElementById('restart');
const body = document.getElementById('body');

let countdown = document.getElementById('countdown');

let count = 10;
let myInterval;

// <!-- EventListeners -->


//start button
start.addEventListener('click', function() {
// <!-- Funzione Intervallo -->
    myInterval = setInterval(function(){

        countdown.innerText = count;
        count--;

// <!-- Controllo del contatore -->

        if(count < 0) {

            clearInterval(myInterval);
            
            countdown.innerText = 'Buon Anno!';

            // <!-- add/remove classes (colore) -->
            body.classList.toggle('default-body');
            body.classList.add('successful');

            // <!-- add/remove classes (bottoni) -->
            start.classList.add('hidden');
            stopbutton.classList.add('hidden');
            restart.classList.toggle('hidden');

        }

    }, 500)

})


//restart button

restart.addEventListener('click', function() {

    // <!-- Logica classi body & tasto restart (colore) -->

    if (countdown.innerText === 'Buon Anno!') {
        
        body.classList.toggle('successful');
        body.classList.add('default-body');
        
    } else if (countdown.innerText === 'Countdown Interrotto :(') {

        body.classList.toggle('interrotto');
        body.classList.add('default-body');

    } 
    
    countdown.innerText = 'Il Countdown sta per ricominciare';

    // <!-- add/remove classes (bottoni) -->
    stopbutton.classList.toggle('hidden');
    restart.classList.toggle('hidden');

    //riassegno 10 al contatore 
    count = 10;

    myInterval = setInterval(function(){
        
        countdown.innerText = count;

        count--;

        if(count < 0) {

            // <!-- add/remove classes (colore) -->

            body.classList.add('successful');
            body.classList.toggle('default-body');

            clearInterval(myInterval);

            countdown.innerText = 'Buon Anno!';

            // <!-- add/remove classes (bottoni) -->

            restart.classList.toggle('hidden');
            stopbutton.classList.toggle('hidden');
            
        }

    }, 500)
})


//stop button

stopbutton.addEventListener('click', function() {

// <!-- add/remove classes (colore) -->

    body.classList.toggle('default-body');
    body.classList.add('interrotto');

    countdown.innerText = 'Countdown Interrotto :(';
    clearInterval(myInterval);

// <!-- add/remove classes (bottoni) -->

    start.classList.add('hidden');
    stopbutton.classList.add('hidden');
    restart.classList.toggle('hidden');

})
    


