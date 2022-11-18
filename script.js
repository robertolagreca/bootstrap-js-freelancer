//PROVA TECNICA --> bootstrap-js-freelancer

//Quando l’utente fa click sul bottone “send” del form, 
//il sito vi calcoli l’ammontare del vostro lavoro per 
//le ore di lavoro richieste dall’utente.

//Il prezzo orario per una commissione varia in questo modo:
    //Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
    //Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
    //Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora

//Se poi l’utente inserisce un codice promozionale tra i seguenti 
//YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che 
//l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.

//Se il codice inserito non è valido, informate l’utente che il 
//codice è sbagliato e calcolate il prezzo finale senza applicare sconti.

//Mostrare il risultato del calcolo del prezzo finale in una “forma umana” 
//in un apposito tag HTML appena sotto il bottone send.

//let btnPrice = document.getElementById("btn-price");
//btnPrice.addEventListener('click', calcolaPrezzo(event))

//ABBOZZANDO
function submitForm(event){
    event.preventDefault(); //gli diciamo di non fare azioni che farebbe di default

    //NOTA MIA devo prendere INPUT ore richieste e INPUT tipologia di lavoro

    //Prendo le ore richieste, trasformo in float
    hoursRequested = parseFloat(document.getElementById("hours").value);
    
    workType = document.getElementById("work-type").value;

    console.log("Ore richieste " + hoursRequested + " e tipologia lavoro " + workType);
}
