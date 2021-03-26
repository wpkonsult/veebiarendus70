const matk1 = {
    nimetus: 'Rabamatk',
    osalejaid: 8,
    kuupaev: '2021-05-03',
    registreerunud: ['Karu Kati', 'Karu Mati', 'Rebase Rein']
}

const matk2 = {
    nimetus: 'Rattamatk',
    osalejaid: 10,
    kuupaev: '2021-06-03 - 2021-06-10',
    registreerunud: ['Rebase Rein']
}

const matk3 = {
    nimetus: 'Süstamakt',
    osalejaid: 10,
    kuupaev: '2021-07-23',
    registreerunud: []
}
const matk4 = {
    nimetus: 'Rattamatk Pärnumaal',
    osalejaid: 6,
    kuupaev: '2021-07-03 - 2021-07-10',
    registreerunud: []
}

const koikMatkad = [
    matk1, 
    matk2,
    matk3,
    matk4,
    {
        nimetus: 'Jalgsimatk Virumaal',
        osalejaid: 20,
        kuupaev: '2021-08-01',
        registreerunud: []
    }
]


function naitaMatkaAruannet(matk) {
    const valjundElement = document.getElementById('valjund')
    let kirjeldus = 'Nimetus: ' + matk.nimetus 
    kirjeldus += ", osalejaid: " + matk.osalejaid 
    kirjeldus += ", registreerunuid: " + matk.registreerunud.length
    kirjeldus += ", veel vabu kohti: " + (matk.osalejaid - matk.registreerunud.length)
       
    
    valjundElement.innerHTML += "<div>" + kirjeldus + "</div>"
}

for (matk of koikMatkad) {
    naitaMatkaAruannet(matk)
}


