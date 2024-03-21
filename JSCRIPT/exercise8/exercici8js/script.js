let body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "lightgrey"

let title = document.getElementById('titulo')
title.style.color = "darkred"

let subtitle = document.getElementsByTagName("h3")[0]
subtitle.style.textDecoration = "underline"

let links = document.getElementsByTagName("a")
for (let i = 0; i < links.length; i++) {
    let href = 'https://www.wikidex.net/wiki/' + links[i].innerHTML
    links[i].href = href
}

document.getElementById("misterioso").classList.add("capturados")


let capturados = document.getElementsByClassName('capturados')
for (let i = 0; i < capturados.length; i++) {
    capturados[i].style.listStyleImage = "url('imagenes/pokeball2.png')"
    capturados[i].style.textTransform = "uppercase"
}

document.getElementsByTagName("h3").remove(0)