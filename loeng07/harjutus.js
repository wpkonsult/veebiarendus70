function naitaTervitus() {
    const valjundEl = document.querySelector('#valjund')
    const nimi = document.querySelector('#nimi').value

    if (nimi == "") {
        valjundEl.innerHTML = "<div>Sisesta enda nimi</div>"
    } else {
        valjundEl.innerHTML = "<h1>Tere " + nimi + "</h1>"
        valjundEl.innerHTML +=  "<p>" + nimi + " - täna on sinu ülejäänud elu esimene päev</p>"
        //valjundEl.innerHTML += "<div>" + nimi[0] + "</div>"
        //valjundEl.innerHTML += "<div>" + nimi[1] + "</div>"
        //valjundEl.innerHTML += "<div>" + nimi[2] + "</div>"
        //valjundEl.innerHTML += "<div>" + nimi[3] + "</div>"
        //valjundEl.innerHTML += "<div>" + nimi[4] + "</div>"
        for (let index = 0; index < nimi.length; index += 1) {
            valjundEl.innerHTML += "<div> Täht number " + index + ": " + nimi[index] + "</div>"
        }

        valjundEl.innerHTML += "<h2>Ja nüüd tagurpidi</h2>"
        for (let index = nimi.length-1; index >= 0; index -= 1) {
            valjundEl.innerHTML += "<div> Täht number " + index + ": " + nimi[index] + "</div>"
        }

        valjundEl.innerHTML += "<h2>Ja nüüd While tsükliga</h2>"
        let i = 0
        while (i < nimi.length) {
            valjundEl.innerHTML += "<div> Täht number " + i + ": " + nimi[i] + "</div>"            
            i += 1
        }

    } 
} 
