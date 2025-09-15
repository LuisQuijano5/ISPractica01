// Importamos las configuraciones de paletas de colores y fuentes definidas en configs.js
import { colorPalettes, fontConfigs } from './configs.js';

//-- Definicion de variables --
// Elementos del html
const root = document.documentElement;

// Botones para darles eventListener
const membersSecA = document.getElementById("members-a");
const clockSecA = document.getElementById("clock-a");
const colorBtn = document.getElementById("color-btn");
const fontBtn = document.getElementById("font-btn");
const memberBtn = document.getElementById("members-btn");

// Secciones para hacerlas visibles
const membersSec = document.getElementById("members-section");
const clockSec = document.getElementById("clock-section");

// Variables que se van a usar para las funciones
let colorIndex = 0;
let fontIndex = 0;
let memberIndex = 0;

// Datos de los integrantes
// Cada objeto representa un integrante del equipo con su nombre, foto y descripcion.
const members = [
    { id: "Alumno 1", name: "Jesus Alejandro Elguera Tovar", photo: "imgs/jesus.png", desc: "Aficionado al fútbol, me considero una persona responsable y con muchas ganas de aprender cosas nuevas cada día. Estoy iniciando en el mundo del running y disfruto cada pequeño avance que me impulsa a seguir mejorando."},
    { id: "Alumno 2", name: "Luis Angel Quijano Guerrero", photo: "imgs/quijano.jpg", desc: "También me gusta mucho el fútbol, soy estudiante de Ingenieria en Sistemas, tengo 4 gatos que quiero mucho y mi música favorita es el reggeatón 🦇."}
];

// -- Funciones Principales --
// Funcion para mostrar la hora actual
function showTime() {
    const now = new Date();

    // Obtener horas, minutos y segundos, asegurando al menos 2 digitos
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Se actualizan los spans del reloj
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Función para actualizar el texto del botón
function updateButtonText() {
    // Calcula el indice del proximo miembro
    const nextIndenx = (memberIndex + 1) % members.length;
    // Cambia el texto del bton para indicar que miembro se mostrara al dar clic
    memberBtn.textContent = "Mostrar " + members[nextIndenx].id;
}

// -- Funcion para cuando se cargue el documento, actualizar y mostrar valores
document.addEventListener('DOMContentLoaded', () => {
    showTime();
    setInterval(showTime,1000);

    updateButtonText();
});

// -- Añadiendo eventListeners -- 
//Al dar click al a de members, se debe hacer visible la seccion de members y ocultar la otra
membersSecA.addEventListener("click", () => {
    //Se debe verificar que no esten ya configuradas como se supone al dar el click
    if(!membersSec.classList.contains("active-section")){
        membersSec.classList.add("active-section"); //Se agrega a la lista de clases para que el estilo se le aplique
        clockSec.classList.remove("active-section"); //Se le quita de la lista de clases para que el estilo DEFAULT se le aplique
    }
});

//Al dar click al a de clock, se debe hacer visible la seccion de clock y ocultar la otra
clockSecA.addEventListener("click", () => {
    //Se debe verificar que no esten ya configuradas como se supone al dar el click
    if(!clockSec.classList.contains("active-section")){
        clockSec.classList.add("active-section"); //Se agrega a la lista de clases para que el estilo se le aplique
        membersSec.classList.remove("active-section"); //Se le quita de la lista de clases para que el estilo DEFAULT se le aplique
    }
});

//Funcion para el cambio de color de fondo cuando se de click al boton
colorBtn.addEventListener("click", () => {
    // Como en css ya esta deifnido el elemento 0, primero hacemos el aumento en 1, el modulo es importante para que se cicle
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
    // Como en css ya esta deifnido el elemento 0, primero hacemos el aumento en 1, el modulo es importante para que se cicle
    fontIndex = (fontIndex + 1) % fontConfigs.length; 
    const nextFont = fontConfigs[fontIndex]; // Se obtiene la configuracion de font que sigue

    //Se cambia los valores en :root de las variables del font que sigue
    for (const variable in nextFont) {
        if (variable.startsWith('--')) { // para saltarse el name puesto
            root.style.setProperty(variable, nextFont[variable]);  // A root se le agrega el nombre de la variable y el valor guardado
        }
    }
});

//Funcion para el cambio de integrante cuando se de click al boton
memberBtn.addEventListener("click", () => {
    const memberCard = document.querySelector(".member-card");
    memberCard.classList.add("fade-out");

    //Transicion suave
    setTimeout(() => {
        // Avanza circularmente al siguiente miembro
        memberIndex = (memberIndex + 1) % members.length;

        // Actualiza la tarjeta con los datos del nuevo integrante
        document.getElementById("member-photo").src = members[memberIndex].photo;
        document.getElementById("member-name").textContent = members[memberIndex].name;
        document.getElementById("member-desc").textContent = members[memberIndex].desc;

        // Actualizar el texto del boton despues de cambiar el integrante
        updateButtonText();
        memberCard.classList.remove("fade-out");
    }, 500);
});
