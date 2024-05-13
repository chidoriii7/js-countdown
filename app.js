// Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
// Potete stampare il messaggio in pagina con un semplice alert.
// Bonus 1
// Mostrate il conteggio alla rovescia in pagina;
// Bonus 2
// Aggiungete un bottone che interrompe il count down e mostra il messaggio;

const start = document.getElementById('start')
const stopbutton = document.getElementById('stop')

let countdown = document.getElementById('countdown');

let count = 10
let myInterval;

start.addEventListener('click', function() {

    myInterval = setInterval(function(){
        countdown.innerText = count
        count--;

        if(count < 0) {

            clearInterval(myInterval);
            countdown.innerText = 'buon anno'
        }

    }, 500)

})

stopbutton.addEventListener('click', function() {

    countdown.innerText = 'HAI STOPPATO IL COUNTDOWN'
    clearInterval(myInterval)
    count = 10

})
    

    
    

