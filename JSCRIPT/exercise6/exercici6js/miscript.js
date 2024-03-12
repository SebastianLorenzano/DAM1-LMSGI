/*
	HAZ AQUÍ EL EJERCICIO...
	SE RESUELVE EN 12 LÍNEAS
	↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
*/
let cajatexto = document.getElementById("cajaTexto");
let imagen = document.getElementById("fotoVacia");
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let li = document.getElementById("ultimoLi");
let texto = document.getElementById("cajaTexto");


document.body.style.background = "cyan";
titulo.style.color = "blue";
titulo.style.fontSize = "50px";
imagen.src = "imagenes/paquirrin.jpg";
subtitulo.style.fontFamily = "Comic Sans MS";
li.style.marginLeft = "20px";
cajatexto.value = "Soy un hacker";