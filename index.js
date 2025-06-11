const prompt = require ("prompt-sync")();
const numero1 = Number(prompt("Ingrese tu numero favorito:"));
const numero2 = Number(prompt("Cual es el doble de tu numero?"));

if (numero2 == numero1 * 2){
    console.log("El doble del tu numero favorito es correcto" );
}

 else
 {
     console.log ("El doble de tu numero favorito esta incorrecto");
    }
    


