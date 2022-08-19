// e-->enter
//o-->ober
//i-->imes
//a-->ai
//u-->ufat
function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
   //i es para que afecte a las mayúsculas y las minúsculas
   //g para toda la frase
   //m afecte múltiples lineas o parráfos
    var txtCifrado= texto.replace(/e/igm,"enter");//replace reemplaza sobre la variable texto y guarda en txtCifrado
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");//ahora cambio en txtCifrado y vuelvo a guardar ahi mismo
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display= "none"; //hace que la imagen desaparezca
    document.getElementById("texto").style.display= "none"; 
    document.getElementById("texto1").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display= "show";//sólo aparece el botón cuando se encripta y desencripta
    document.getElementById("copiar").style.display= "inherit";
}


function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
   //i es para que afecte a las mayúsculas y las minúsculas
   //g para toda la frase
   //m afecte múltiples lineas o parráfos
    var txtCifrado= texto.replace(/enter/igm,"e");//replace reemplaza sobre la variable texto y guarda en txtCifrado
    var txtCifrado= txtCifrado.replace(/ober/igm,"o");//ahora cambio en txtCifrado y vuelvo a guardar ahi mismo
    var txtCifrado= txtCifrado.replace(/imes/igm,"i");
    var txtCifrado= txtCifrado.replace(/ai/igm,"a");
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display= "none"; //hace que la imagen desaparezca
    document.getElementById("texto").style.display= "none"; 
    document.getElementById("texto1").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display= "show";//sólo aparece el botón cuando se encripta y desencripta
    document.getElementById("copiar").style.display= "inherit";
}

function copiar() {
    var contenido = document.getElementById("texto1");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!")
}