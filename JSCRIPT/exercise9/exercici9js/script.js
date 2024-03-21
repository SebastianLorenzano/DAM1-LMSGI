document.getElementById('opcion1B').remove()
document.getElementById('opcion2A').remove()
document.getElementById('opcion3B').remove()
document.getElementById('opcion4B').remove()
document.getElementById('opcion5B').remove()
document.getElementById('opcion6A').remove()
document.getElementById('opcion7A').remove()
document.getElementById('opcion8A').remove()
document.getElementById('opcion9B').remove()
document.getElementById('opcion10B').remove()

let gatos = document.getElementsByClassName('gatos')


for (let i = 0; i < gatos.length; i++) {
    gatos[i].remove()
    i--
}
let frases = document.getElementsByTagName("h3")

for (let i = 0; i < frases.length; i++) {
    frases[i].remove()
    i--
}





