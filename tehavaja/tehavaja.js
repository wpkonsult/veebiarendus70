function loeYlesanne() {
    const sisestusElement = document.querySelector('#ylesanne')
    return sisestusElement.value
}

function lisaYlesanneValjundisse(tekst) {
    const valjundElement = document.querySelector('#ylesanded')
    valjundElement.innerHTML += '<div class="form-check"><input type="checkbox" class="form-check-input" value="">' + tekst + '</div>'
}

function tyhjendaJaFokusseeri(selektor) {
    const element = document.querySelector(selektor)
    element.value = ''
    element.focus()
}

function lisaYlesanne() {
    const ylesanne = loeYlesanne()
    if (ylesanne == '') {
        return
    }

    lisaYlesanneValjundisse(ylesanne)
    tyhjendaJaFokusseeri('#ylesanne')
}