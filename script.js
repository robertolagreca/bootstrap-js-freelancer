//PROVA TECNICA --> bootstrap-js-freelancer

//Quando l’utente fa click sul bottone “send” del form, 
//il sito vi calcoli l’ammontare del vostro lavoro per 
//le ore di lavoro richieste dall’utente.

//Il prezzo orario per una commissione varia in questo modo:
    //Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
    //Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
    //Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora

//Se poi l’utente inserisce un codice promozionale tra i seguenti 
//YHDNU32, JANJC63, PWKCN25, SJDPO96, C, fate in modo che 
//l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.

//Se il codice inserito non è valido, informate l’utente che il 
//codice è sbagliato e calcolate il prezzo finale senza applicare sconti.

//Mostrare il risultato del calcolo del prezzo finale in una “forma umana” 
//in un apposito tag HTML appena sotto il bottone send.

//let btnPrice = document.getElementById("btn-price");
//btnPrice.addEventListener('click', calcolaPrezzo(event))

//dichiarazione ed assegnazione array con codici sconto
let arrayDiscountCode = ["YHDNU32" , "JANJC63" , "PWKCN25" , "SJDPO96" , "SJDPO96" ];

//FUNZIONE CHE SI ATTIVA QUANDO VIENE CLICCATO IL BOTTONE IN DOM
function submitForm(event){
    event.preventDefault(); //gli diciamo di non fare azioni che farebbe di default

    //Dichiariazione variabili e assegnazione valori iniziali.
    let hoursRequested, workType, discountCode, discountValue, hourPrice;
    let totalPrice, printTotalPrice;

    discountValue= parseFloat(0);
    hourPrice = parseFloat(0);
    totalPrice = parseFloat(0);
    
    



    //Prendo le ore richieste, trasformo in float
    hoursRequested = parseFloat(document.getElementById("hours").value);

    //Prendo tipologia lavoro
    workType = document.getElementById("work-type").value;

    //Prendo codice sconto
    discountCode = document.getElementById("discount").value;
   
    

    //stampa su console ore richieste, tipologia lavoro e codice sconto
    console.log(`Ore richieste \t${hoursRequested}\nTipologia lavoro \t${workType}\nCodice sconto \t${discountCode}`);



    //FUNZIONE SWITCH PER I CODICI SCONTO
    discountValue = checkDiscountCode(arrayDiscountCode, discountCode);

    //FUNZIONE SWITCH PER CAPIRE TIPOLOGIA LAVORO
    hourPrice = checkWorkType(workType);

    //FUNZIONE CALCOLO PREZZO FINALE
    totalPrice = getTotalPrice(hoursRequested, hourPrice, discountValue);
    
    //FUNZIONE STAMPA SU DOM PREZZO FINALE E SCONTO APPLICATO
    printTotalPrice = getPrintTotalPrice (totalPrice, discountValue);

    //FUNZIONE STAMPA SE SI E' INSERITO CODICE ERRATO.
    getDiscountWarning(discountValue, discountCode);



    //stampa su console prezzo totale e sconto applicato.
    console.log("Prezzo totale di " + totalPrice.toFixed(2) + " €. Applicato sconto del " + (discountValue * 100) + "%.");
}


//FUNZIONE CICLO FOR PER CONTROLLO CODICI SCONTO
function checkDiscountCode(arrayDiscountCode, discountCodeF){
    let discountValueF = parseFloat(0);
    

    for(i = 0; i < arrayDiscountCode.length; i++){
        if (discountCodeF == arrayDiscountCode[i]){
            discountValueF = 0.25;
            console.log("Sconto accettato");
            return discountValueF;
        }
    }
    console.log("Sconto non accettato/non inserito/inesistente");
    
    return discountValueF;
}



//FUNZIONE SWITCH PER CAPIRE TIPOLOGIA LAVORO
function checkWorkType(workTypeF){
    let hourPriceF= parseFloat(0);
switch(workTypeF){
    
    case "1" :
        hourPriceF = 20.50;
        console.log("Costo orario con value 1 " + hourPriceF  + "€");
        break;
    case "2" :
        hourPriceF = 15.30;
        console.log("Costo orario con value 2 " + hourPriceF  + "€");
        break;
    case "3" :
        hourPriceF = 33.60;
        console.log("Costo orario con value 3 " + hourPriceF + "€");
        break;
}
return hourPriceF;
}




//FUNZIONE CALCOLO PREZZO FINALE
function getTotalPrice(hoursRequestedF, hourPriceF, discountValueF){
    let totalPriceF = parseFloat(0);
    totalPriceF = (hoursRequestedF * hourPriceF) - ((hoursRequestedF * hourPriceF) * discountValueF).toFixed(2);
    return totalPriceF
}




//FUNZIONE STAMPA SU DOM PREZZO FINALE E SCONTO APPLICATO
function getPrintTotalPrice (totalPriceF, discountValueF){
let printTotalPriceF = "";
printTotalPriceF = document.getElementById("print-price");

printTotalPriceF.innerHTML = 
`
<p><strong>Il prezzo finale è di ${totalPriceF.toFixed(2)} €.</strong>
Con uno sconto del ${discountValueF * 100} %.</p>
`
return printTotalPriceF;
}




//FUNZIONE CHE AGGIUNGE TESTO SOLO SE IL CODICE SCONTO INSERITO E' SBAGLIATO
function getDiscountWarning(discountValuef,discountCodeF ) {

if(discountValuef == 0 && discountCodeF != ""){
let inputDiscountWarning;
let printDiscountCodeWarning;
let createPDiscountWarning="";
let textPDiscountWarning="";

//Creo nuovo paragrafo che viene aggiunto
createPDiscountWarning = document.createElement("p");
createPDiscountWarning.setAttribute("id", "discount-warning");

textPDiscountWarning = document.createTextNode("Il codice inserito è sbagliato/inesistente");

createPDiscountWarning.appendChild(textPDiscountWarning);
console.log(createPDiscountWarning);
printDiscountCodeWarning = document.getElementById("print-price").appendChild(createPDiscountWarning);

//Il codice sconto errato diventa rosso.
inputDiscountWarning = document.getElementById("discount").classList;
inputDiscountWarning.add("text-danger");
}
}




/*FUNZIONE SWITCH PER I CODICI SCONTO
function checkDiscountCodeSwitch(discountCodeF){
switch(discountCodeF){
    case "YHDNU32" :
        discountValueF = 0.25;
        console.log("Sconto accettato con codice YHDNU32");
        break;
    case "JANJC63" :
        discountValueF = 0.25;
        console.log("Sconto accettato con codice JANJC63");
        break;
    case "PWKCN25" :
        discountValueF = 0.25;
        console.log("Sconto accettato con codice PWKCN25");
        break;
    case "SJDPO96" :
        discountValueF = 0.25;
        console.log("Sconto accettato con codice SJDPO96");
        break;
    case "POCIE24" :
        discountValueF = 0.25;
        console.log("Sconto accettato con codice POCIE24");
        break;
    default:
        discountValueF = 0;
        console.log("Codice sconto non accettato o inesistente");
}
return discountValueF;
} */