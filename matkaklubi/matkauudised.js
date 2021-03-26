
const koikUudised = [
    {
        pealkiri: "Esimene uudis",
        kuupäev: "02.01.2021",
        sisu: "Esimene uudis mis räägib sellest et matkata on hea"
    },
    {
        pealkiri: "Teine uudis",
        kuupäev: "13.03.2021",
        sisu: "Teine uudis mis tõestab, et matkamine on tervisele kasulik"
           
    },
    {
        pealkiri: "Kolmas uudis",
        kuupäev: "25.034.2021",
        sisu: "Kolmas uudis räägib matkamise sotsiaalsest headusest"
    },
]
    
    
    function tervita(tekst) {
        console.log('Tere' + tekst)
    }

function testFunktsioon() {
    for ( i of koikUudised ) {
        console.log(i.pealkiri)        
    }
}

//See teeb sama mis testFunktsioon
function naitaPealkirja(uudis) {
    console.log(uudis.sisu)
}

function testFunktsioon2() {
    koikUudised.forEach(naitaPealkirja)
}

testFunktsioon()