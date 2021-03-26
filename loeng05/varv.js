let varv = prompt("Sisesta enda lemmikvärv:")

const minuLemmikvarv = "roheline"
const minuLemmikvarv2 = "punane"

let teade
if ( minuLemmikvarv == varv || minuLemmikvarv2 == varv ) { 
    teade = "Hurraa - meil on sama lemmikvärv " + varv
} else {
    teade = varv + " ei ole minu lemmik"
}
console.log(teade)
