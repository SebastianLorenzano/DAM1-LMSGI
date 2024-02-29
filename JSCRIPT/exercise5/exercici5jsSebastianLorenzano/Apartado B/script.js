let notas = [6.532 , 9.477 , 7.677 , 6.607
    , 9.247 , 9.794 , 9.47 , 8.355 , 0.416 ,
    5.646 , 8.208 , 4.265 , 6.999 , 8.795 ,
    1.807 , 3.36 , 6.874 , 8.813 , 3.165 ,
    5.001];

notas.forEach(function(element) {
    let condition
    if (element < 5) {
        condition = " [Insuficiente]"
    }
    else if (5 <= element && element < 6) {
        condition = " [Suficiente]"
    }
    else if (6 <= element && element < 7) {
        condition = " [Bien]"
    }
    else if (7 <= element && element < 9) {
        condition = " [Notable]"
    }
    else if (element >= 9) {
        condition = " [Sobresaliente]"
    }



    document.write(element + condition + "<br>")
})