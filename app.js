let primerNumero = parseInt(prompt("Ingresa un número del 1 al 10."));
    
   let cond = () => {    
    if (primerNumero > 10 || primerNumero <= 0) {
        alert("El número ingresado es inválido. Por favor ingresa un número del 1 al 10.");
        primerNumero = parseInt(prompt("Ingresa un número del 1 al 10."));
        cond();
    } else { alert("Ahora lo multiplicamos x2.");
    };
};

cond();

let mult = primerNumero * 2;
alert(`El resultado es ${mult}. Recuerda este número.`);

let segundoNumero = parseInt(prompt("Ingresa el resultado anterior."));
segundoNumero = parseInt(prompt("Ahora sumale 5."));

alert("Ahora lo multiplicamos x50.");

let mult2 = segundoNumero * 50;
alert(`El resultado es ${mult2}. Si el resultado muestra un año en el que ya habías tenido al menos un cumpleaños, sumale 1772. Si no, sumale 1773.`);

let tercerNumero = parseInt(prompt("Ingresa el número a sumar."));
let cuartoNumero = mult2 + tercerNumero;
let quintoNumero = parseInt(prompt("Ahora le restamos tu año de nacimiento. Ingresalo aquí."));

let edad = cuartoNumero - quintoNumero;

alert(`El resultado de la resta es ${edad}. El primer dígito es el número que elegiste y los últimos dos dígitos son tu edad actual o la edad que cumplirás este año!`);

alert("¡Gracias por jugar! :)");

// Hice esta actividad como práctica cuando empezamos a ver prompts y alerts. No supe cómo meter un for al juego así que agrego 
// un pequeño ejercicio acá abajo.

let n = parseInt(prompt("Ingresa un número del 1 al 9 para saber su tabla de multiplicación!"));
let tabla = [];

for (let i = 0; i <= 10 ; i++) {
    tabla.push(n * i); 
}

let cond2 = () => {    
    if (n > 10 || n <= 0) {
        alert("El número ingresado es inválido. Por favor ingresa un número del 1 al 9.");
        n = parseInt(prompt("Ingresa un número del 1 al 9 para saber su tabla de multiplicación!"));
        cond();
    } else { alert(`La tabla de multiplicación de ${n} es ${tabla}`);
}
}

cond2();

alert("Gracias por participar!")
