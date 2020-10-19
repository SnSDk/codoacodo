dia = window.prompt("Coloca aquí el día en el que naciste (dos digitos)")
mes = window.prompt("Coloca aquí el mes en el que naciste (dos digitos)")

zodiaco = mes + dia
console.log(zodiaco)
zodiacoNum = parseFloat(zodiaco)

if (zodiacoNum > 121 && zodiacoNum < 219){
    document.write("Sos de acuario")
}else if (zodiacoNum > 219 && zodiacoNum < 320){
    document.write("Sos de piscis")
}else if (zodiacoNum > 320 && zodiacoNum < 420){
    document.write("Sos de aries")
}else if (zodiacoNum > 420 && zodiacoNum < 521){
    document.write("Sos de tauro")
}else if (zodiacoNum > 521 && zodiacoNum < 621){
    document.write("Sos de geminis")
}else if (zodiacoNum > 621 && zodiacoNum < 722){
    document.write("Sos de cancer")
}else if (zodiacoNum > 722 && zodiacoNum < 823){
    document.write("Sos de leo")
}else if (zodiacoNum > 823 && zodiacoNum < 924){
    document.write("Sos de virgo")
}else if (zodiacoNum > 924 && zodiacoNum < 1023){
    document.write("Sos de libra")
}else if (zodiacoNum > 1023 && zodiacoNum < 1122){
    document.write("Sos de escorpio")
}else if (zodiacoNum > 1122 && zodiacoNum < 1221){
    document.write("Sos de sagitario")
}else if (zodiacoNum > 1221 && zodiacoNum < 1232){
    document.write("Sos de capricornio")
}else if (zodiacoNum > 000 && zodiacoNum < 121){
    document.write("Sos de capricornio")
}
    