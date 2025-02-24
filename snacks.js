//SNACK 1
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
    return a + b
}
console.log(somma(2, 2))

//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma = function (a, b) {
    return a + b
}
console.log(somma(2, 2))

//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma = (a, b) => (a + b)
console.log(somma(2, 2))


//SNACK 2
//Crea una arrow function che calcola il quadrato di un numero.
const quadrato = (num) => (num ** 2)
console.log(quadrato(3))


//SNACK 3
//Crea una funzione eseguiOperazione
const eseguiOperazione = (a, b, operazione) => (operazione(a, b))

const somma = (a, b) => (a + b)
const sottrazione = (a, b) => (a - b)

console.log(eseguiOperazione(2, 2, somma))
console.log(eseguiOperazione(2, 2, sottrazione))

//dichiarativa
function eseguiOperazione(a, b, operazione) {
    return operazione(a, b)
}

console.log(eseguiOperazione(2, 2, somma))


//SNACK 4
//Crea un generatore di funzioni creaTimer
function creaTimer(tempo) {
    return () => (
        setTimeout(() => {
            console.log("Tempo scaduto!")
        }, tempo)
    )
}

const timer = creaTimer(1000)
timer();


//SNACK 5
//Crea una funzione stampaOgniSecondo con setInterval.
function stampaOgniSecondo(messaggio) {
    const intervallo = setInterval(() => {
        console.log(messaggio)
    }, 1000)
}

const intervallo = stampaOgniSecondo("Ciao")

setTimeout(() => {
    clearInterval(intervallo)
    console.log("Stop")
}, 5000)


//SNACK 6
//Crea un contatore automatico con setInterval
function creaContatoreAutomatico(intervallo) {

    let contatore = 0

    setInterval(() => {
        console.log(contatore++)
    }, intervallo)
}

creaContatoreAutomatico(1000)


//SNACK 7
//Crea una funzione che ferma un timer dopo un certo tempo
function eseguiEferma(messaggio, avvio, stop) {

    let intervallo

    setTimeout(() => {
        intervallo = setInterval(() => {
            console.log(messaggio)
        }, 1000)
    }, avvio)

    setTimeout(() => {
        clearInterval(intervallo)
    }, stop)
}

eseguiEferma("ciao", 1000, 5000)


//SNACK 8
//Crea una funzione che simula un conto alla rovescia
function contoAllaRovescia(n) {

    let contatore = n

    const intervallo = setInterval(() => {
        if (contatore > 0) {
            console.log(contatore--)
        } else {
            clearInterval(intervallo)
            console.log("Tempo scaduto!")
        }
    }, 1000)
}

contoAllaRovescia(4)