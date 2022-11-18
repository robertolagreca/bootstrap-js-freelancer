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

    let hoursRequested, workType, discountCode, discountValue, hourPrice;
    let totalPrice, printTotalPrice;

    discountValue= parseFloat(0);
    hourPrice = parseFloat(0);
    totalPrice = parseFloat(0);
    printTotalPrice = "";
    //NOTA MIA devo prendere INPUT ore richieste e INPUT tipologia di lavoro

    //Prendo le ore richieste, trasformo in float
    hoursRequested = parseFloat(document.getElementById("hours").value);
    
    workType = document.getElementById("work-type").value;

    discountCode = document.getElementById("discount").value;

    //SWITCH PER I CODICI SCONTO
    switch(discountCode){
        case "YHDNU32" :
            discountValue = 0.25;
            console.log("Sconto accettato con codice YHDNU32");
            break;
        case "JANJC63" :
            discountValue = 0.25;
            console.log("Sconto accettato con codice JANJC63");
            break;
        case "PWKCN25" :
            discountValue = 0.25;
            console.log("Sconto accettato con codice PWKCN25");
            break;
        case "SJDPO96" :
            discountValue = 0.25;
            console.log("Sconto accettato con codice SJDPO96");
            break;
        case "POCIE24" :
            discountValue = 0.25;
            console.log("Sconto accettato con codice POCIE24");
            break;
        default:
            discountValue = 0;
            console.log("Codice sconto non accettato o inesistente");
    }



    console.log(`Ore richieste \t${hoursRequested}\nTipologia lavoro \t${workType}\nCodice sconto \t${discountCode}`);

//SWITCH PER CAPIRE TIPOLOGIA LAVORO
    switch(workType){
        case "1" :
            hourPrice = 20.50;
            console.log("Costo orario con value 1 " + hourPrice  + "€");
            break;
        case "2" :
            hourPrice = 15.30;
            console.log("Costo orario con value 2 " + hourPrice  + "€");
            break;
        case "3" :
            hourPrice = 33.60;
            console.log("Costo orario con value 3 " + hourPrice + "€");
            break;
    }

//CALCOLO PREZZO FINALE
totalPrice = (hoursRequested * hourPrice) - ((hoursRequested * hourPrice) * discountValue).toFixed(2);
console.log("Prezzo totale di " + totalPrice.toFixed(2) + " €. Applicato sconto del " + (discountValue * 100) + "%.");

//INSERIRE PREZZO FINALE CON DICITURA SCONTO SU DOM
printTotalPrice = document.getElementById("print-price");

printTotalPrice.innerHTML = 
`
<p><strong>Il prezzo finale è di ${totalPrice.toFixed(2)} €.</strong>\n
con uno sconto del ${discountValue * 100} €.</p>
`

}

