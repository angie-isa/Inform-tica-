//datos
const nombre= "mary";
const clave= "1234";

// capturamos la informacion ingresada por el usuario

let nomIng= document.getElementById("usuario");
let claveIng= document.getElementById("contraseña");
let boton= document.getElementById("btn-ingresar");

// escuchamos el evento que dispara el boton

boton.addEventListener ("click",function(){
alert(nomIng.value);


});