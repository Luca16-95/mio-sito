var phrases = [
    "backend developer",
    "frontend developer",
    "full-stack developer",
];
var element = document.querySelector(".text");
// Indici per tenere traccia della frase corrente e della lettera corrente
var phraseIndex = 0;
var letterIndex = 0;
//si occupa di controllare se la frase è stata digitata in toto, nel caso assegno true e comincio la cancellaizone
var isDeleting = false;
// Funzione per scrivere o cancellare una lettera alla volta
function typeLetter() {
    var _a;
    var currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
        // Scrittura della frase lettera per lettera
        if (letterIndex < currentPhrase.length) {
            element.textContent += currentPhrase[letterIndex]; // Aggiunge la lettera
            letterIndex++; // Passa alla lettera successiva
        }
        else {
            // Se la frase è terminata, inizia a cancellare dopo una pausa
            isDeleting = true;
            setTimeout(function () {
                // Inizia la cancellazione
                typeLetter();
            }, 1000); //dopo aver completato il typing, attende un secondo prima della cancellazione
        }
    }
    else {
        // controlla che letter index sia maggiore di 0, nel caso sia falso esegue l else.
        if (letterIndex > 0) {
            element.textContent = ((_a = element.textContent) !== null && _a !== void 0 ? _a : "").slice(0, -1); //rimuove ciclicamente l ultima lettera dalla stringa
            letterIndex--; // Passa alla lettera precedente
        }
        else {
            // Se tutte le lettere sono state cancellate, passa alla frase successiva
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; //o scrive la frase dopo o torna alla prima
            setTimeout(function () {
                typeLetter(); //inizia a scrivere
            }, 500); //pausa di mezzo secondo prima di partire con la nuova frase
        }
    }
}
// avvio del typing lettere
setInterval(typeLetter, 100);
/**
 * fine della sezione per il lettering
 * nella prossima sezione si occuperà (il bottone)
 * di permettere al click di scaricre il mio cv
 */

window.onload = function () {
    // Trova il bottone tramite il suo ID
    var downloadButton = document.getElementById("download-btn");
    downloadButton.addEventListener("click", function () {
        // Crea un elemento <a> dinamicamente
        var link = document.createElement("a");
        // Imposta l'URL del file 
        link.href = "./assets/CV - Manzo -1.pdf"; 
        link.download = "CV_LucaManzo.pdf"; 
        link.click();
    });
};
