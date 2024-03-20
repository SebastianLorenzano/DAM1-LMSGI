let enlaces = document.getElementsByTagName("img");
for (let i = 0; i < enlaces.length; i++)
{
    enlaces[i].src = "imagenes/mundo" + (i + 1) + ".png"
    enlaces[i].style.border = "3px solid white"
}
let body = document.getElementsByTagName("body")

document.body.style.backgroundColor = "darkblue"

let h2 = document.getElementsByTagName("h2");
for (let i = 0; i < h2.length; i++)
{
    h2[i].innerHTML = "Mundo " + (i + 1)
    h2[i].style.textAlign = "center"
    h2[i].style.color = "white"
}
