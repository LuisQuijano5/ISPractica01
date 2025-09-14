//Si vas a agregar mas colores o font, tiene que agregarlo aca tmb no solo en styles
import { colorPalettes, fontConfigs } from './configs.js';

//-- Definicion de variables --
// Elementos del html
const root = document.documentElement;

// Botones para darles eventListener
const membersSecA = document.getElementById("members-a");
const clocklSecA = document.getElementById("clock-a");
const colorBtn = document.getElementById("color-btn");
const fontBtn = document.getElementById("font-btn");

// Secciones para hacerlas visibles
const membersSec = document.getElementById("members-section");
const clockSec = document.getElementById("clock-section");

// Varibales que se van a usar para las funciones
let colorIndex = 0;
let fontIndex = 0;

// -- Funcion cuando se cargue el documento, aqui pon la llamada del reloj par que inicie con lo suyo
document.addEventListener('DOMContentLoaded', () => {
    
});

// -- A;adiendo eventListeners -- 
//Al dar click al a de members, se debe hacer visible la seccion de members y ocultar la otra
membersSecA.addEventListener("click", () => {
    //Se debe verificar que no esten ya configuradas como se supone al dar el click
    if(!membersSec.classList.contains("active-section")){
        membersSec.classList.add("active-section"); //Se agrega a la lista de clases para que el estilo se le aplique
        clockSec.classList.remove("active-section"); //Se le quita de la lista de clases para que el estilo DEFAULT se le aplique
    }
});

//Al dar click al a de clock, se debe hacer visible la seccion de clock y ocultar la otra
clocklSecA.addEventListener("click", () => {
    //Se debe verificar que no esten ya configuradas como se supone al dar el click
    if(!clockSec.classList.contains("active-section")){
        clockSec.classList.add("active-section"); //Se agrega a la lista de clases para que el estilo se le aplique
        membersSec.classList.remove("active-section"); //Se le quita de la lista de clases para que el estilo DEFAULT se le aplique
    }
});

//Funcion para el cmabio de color de fondo cuando se de click al boton
colorBtn.addEventListener("click", () => {
    // Como en css ya esta deifnido el elemetno 0, primero hacemos el aumento en 1, el modulo es importante para que se cicle
    colorIndex = (colorIndex + 1) % colorPalettes.length; 
    const nextPalette = colorPalettes[colorIndex]; // Se obtiene la paleta de colores que sigue

    //Se cambia los valores en :root de las variables de color
    for (const variable in nextPalette) {
        if (variable.startsWith('--')) { // para saltarse el name puesto
            root.style.setProperty(variable, nextPalette[variable]); // A root se le agrega el nombre de la variable y el valor guardado
        }
    }
});

//Funcion para el cmabio de font cuando se de click al boton
fontBtn.addEventListener("click", () => {
    // Como en css ya esta deifnido el elemetno 0, primero hacemos el aumento en 1, el modulo es importante para que se cicle
    fontIndex = (fontIndex + 1) % fontConfigs.length; 
    const nextFont = fontConfigs[fontIndex]; // Se obtiene la configuracion de font que sigue

    //Se cambia los valores en :root de las variables del font que sigue
    for (const variable in nextFont) {
        if (variable.startsWith('--')) { // para saltarse el name puesto
            root.style.setProperty(variable, nextFont[variable]);  // A root se le agrega el nombre de la variable y el valor guardado
        }
    }
});


