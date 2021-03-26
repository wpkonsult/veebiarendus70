function kontrolliVarvi() {

    const valjundEl = document.querySelector('#valjund')
    const varv = document.querySelector('#varv').value

    const minuLemmik = 'roheline'

    if (varv == "") {
        valjundEl.innerHTML = "<div>Sisesta värv</div>"
    } else {
        if ( minuLemmik == varv) {
            valjundEl.innerHTML = "<h2 class='roheline'>Õnnitlused!</h2><div>Meil on sama lemmikvärv</h2>"
        } else {
            valjundEl.innerHTML = "<h2>Proovi uuesti</h2>"
            valjundEl.innerHTML += "<p>" + varv + " ei ole minu lemmik </p>"
            valjundEl.innerHTML += "<h3 class='roheline'>Sisesta uus värv.</h3>"                        
        }
    }

}