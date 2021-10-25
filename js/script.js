/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA:
/*
 Nel console.log risulterà 2 volte PI essendo che la prima parte (abbastanza ovvia) da il valore e lo riproduce nella console,
 invece nella seconda parte soddisfiamo i requisiti del "if", ovvero 3.14 (PI) risulta maggiore o uguale a 3, perciò di conseguenza viene registrato nella console. (di nuovo)
*/

// 3.14
// 3.14

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: 
/*
 La variante "var" soddisfa "if" essendo "true", perciò nella console verra registrato prima il messaggio letterale tra virgolette e poi l'elemento favColour (ovvero violet);
 Nella variante "let" abbiamo il console.log esterno al "if" perciò non ha bisogno di seguire nessuna condizione e viene visualizzata seguendo l'ordine degli elementi contenuti tra parentesi tonda.
*/

// Il mio colore preferito è: violet
// Ci sono 12 mesi in un anno.

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: 
/*
Il primo console.log si trova all'interno di una funzione, il primo elemento che richiama il console.log è "theSecond" che ritroviamo dentro la funzione, dopo aggiunge la ", " e aggiungere dopo esso
 "moreIngredients" che funziona da collegamento/assimilazione dell'elemento che è contenuto al "if" al di fuori della funzione. Soddisfacendo i requisiti "true" allora "makePizza" farà parte della funzione,
 perciò il valore che è stato assegnato a "makePizza" sarà assegnato all'elemento indicato con "moreIngredients".
 Nel secondo console.log non sarà possibile arrivare al valore di "theSecond" (anche se soddisfa il "if") siccome esso si trova all'interno della funzione e non abbiamo nessun "collegamento" ad esso.
 Se il console.log fosse stato aggiunto al posto di "// { ... }" avrebbe dato la giusta visualizzazione, ovvero "Il secondo ingrediente necessario: Sugo di pomodoro freschissimo".
*/

// Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana.
// Errore

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}