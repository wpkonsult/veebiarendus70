const varvid = []

function loeVarv() {
    const varvEl = document.querySelector('#varv')
    let varv = varvEl.value
    if (varv == '') {
        varv = prompt("Sisesta ikka värv")
    }
    return varv
}

function looValjund(varvid) {
    let nimekiri = "";
    for (i = 0; i < varvid.length; i++) {
        nimekiri += "<li>"
        nimekiri += varvid[i]
        nimekiri += "</li>"
    }

    console.log(nimekiri)

    const valjundEl = document.querySelector('#varvideLoetelu')
    valjundEl.innerHTML = ""
    valjundEl.innerHTML += "<h1>Sisestatud värvid</h1> "
    valjundEl.innerHTML += "<ul>" + nimekiri + "</ul>"
}

function lisaVarv() {
    const sisestatudVarv = loeVarv()
    let kasVarvOlemas = false;
    for (let i = 0; i < varvid.length && !kasVarvOlemas; i++) {
        console.log('Kontrollin: ' + varvid[i])
        if (sisestatudVarv == varvid[i]) {
            console.log("Olemas!")
            kasVarvOlemas = true
        }
    }

    if (kasVarvOlemas) {
        alert("See värv on juba olemas")
    }  else {
        varvid.push(sisestatudVarv)
        looValjund(varvid)
    }
    
}