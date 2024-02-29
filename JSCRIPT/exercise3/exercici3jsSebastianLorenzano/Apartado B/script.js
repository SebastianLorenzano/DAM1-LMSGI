let number = prompt("Di un número del 1 al 10") 

if (1 <= number && number <= 10 && number != 5) {   
    document.write("Te has librado...")
}
else if (1 > number || number > 10) {   
    document.write("He dicho del 1 al 10...<br>¿No te enteras o qué?")
}
else if (number == 5) {
    document.write("¡Por el c*** de la hinco!<br>JAJAJA")
}

