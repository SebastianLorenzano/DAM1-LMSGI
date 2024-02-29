let dayArray = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
document.write("<u>Array recorrido con FOR</u><br>")
for (let i = 0; i < dayArray.length; i++) {
    document.write(dayArray[i] + "<br>")
}
document.write("<br><br><u>Array recorrido con FOREACH</u><br>")

dayArray.forEach(function (element) {
    document.write(element + "<br>")
})

