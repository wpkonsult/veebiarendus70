let nimi

nimi = prompt("Sisesta enda nimi:")
const esitaht = nimi[0]

let tervitus
if ( esitaht == "A" || esitaht == "a" ) { 
    tervitus = "Tere peaaegu nimekaim " + nimi
} else {
    tervitus = nimi +" - sul on ilus nimi"
}

let tervitus2 
let nimePikkus = nimi.length
if ( esitaht == "A" && nimePikkus > 5) {
    tervitus2 = "Nimekaim - küll sul on alles pikk nimi"
} else {
    tervitus2 = "sul on ilus lühike nimi"
}

alert(tervitus)
console.log(tervitus)
console.log(tervitus2)