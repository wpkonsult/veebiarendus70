function lisaYlesanne() {
    const sisendElement = document.getElementById('sisend')
    const ylesanne = sisendElement.value

    if (ylesanne == '') {
        alert('Näita enne ülesanne!')
        return false
    }

    const valjundElement = document.querySelector('.valjund')
    
    let ylesandeElement = ''
    ylesandeElement += '<div>'
    ylesandeElement +=  '<div class="form-check">'
    ylesandeElement +=      '<input type="checkbox" class="form-check-input" value="">' + ylesanne
    ylesandeElement +=  '</div>'
    ylesandeElement += '</div>'
    
    valjundElement.innerHTML += ylesandeElement

    sisendElement.value = ""
    sisendElement.focus()
}