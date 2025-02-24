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
//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = (num) => (num ** 2)
console.log(quadrato(3))


//SNACK 3
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
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
//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(tempo) {
    return () => (
        setTimeout(() => {
            console.log("Tempo scaduto!")
        }, tempo)
    )
}

const timer = creaTimer(1000)
timer();