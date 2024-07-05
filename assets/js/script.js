let nombre = prompt(`Ingresa tu nombre`);
let carrera = prompt(`Ingresa tu carrera`);

document.getElementById("nombre").innerHTML = nombre;
document.getElementById("carrera").innerHTML = carrera;


let htmlNota1 = prompt(`Ingresa tu primera nota de HTML`); 
let htmlNota2 = prompt(`Ingresa tu segunda nota de HTML`); 
let htmlNota3 = prompt(`Ingresa tu tercera nota de HTML`); 

let cssNota1 = prompt(`Ingresa tu primera nota de CSS`);
let cssNota2 = prompt(`Ingresa tu segunda nota de CSS`);
let cssNota3 = prompt(`Ingresa tu tercera nota de CSS`);

let jsNota1 = prompt(`Ingresa tu primera nota de JavaScript`);
let jsNota2 = prompt(`Ingresa tu segunda nota de JavaScript`);
let jsNota3 = prompt(`Ingresa tu tercera nota de JavaScript`);

document.getElementById("html-nota-1").innerHTML = htmlNota1;
document.getElementById("html-nota-2").innerHTML = htmlNota2;
document.getElementById("html-nota-3").innerHTML = htmlNota3;

document.getElementById("css-nota-1").innerHTML = cssNota1;
document.getElementById("css-nota-2").innerHTML = cssNota2;
document.getElementById("css-nota-3").innerHTML = cssNota3;

document.getElementById("js-nota-1").innerHTML = jsNota1;
document.getElementById("js-nota-2").innerHTML = jsNota2;
document.getElementById("js-nota-3").innerHTML = jsNota3;

promedioHtml = (parseInt(htmlNota1) + parseInt(htmlNota2) + parseInt(htmlNota3)) / 3;
promedioCss = (parseInt(cssNota1) + parseInt(cssNota2) + parseInt(cssNota3)) / 3;
promedioJs = (parseInt(jsNota1) + parseInt(jsNota2) + parseInt(jsNota3)) / 3;

document.getElementById("html-nota-promedio").innerHTML = promedioHtml;
document.getElementById("css-nota-promedio").innerHTML = promedioCss;
document.getElementById("js-nota-promedio").innerHTML = promedioJs;



/* let notasHtml = [];
let sumaHtml = 0; 

function nHtml() {
    for (let i = 1; i <=3; i++) {
        notasHtml[i] = parseInt(prompt(`Ingresa tu nota ${i} de HTML`));
        document.getElementById(`html-nota-${i}`).innerHTML = notasHtml[i];
        sumaHtml += notasHtml[i];
    }
        let promedioHtml = Math.floor((sumaHtml/3)*10)/10;
        document.getElementById("html-nota-promedio").innerHTML = promedioHtml;
}
nHtml(); 

let notasCss = [];
let sumaCss = 0; 

function nCss() {
    for (let i = 1; i <=3; i++) {
        notasCss[i] = parseInt(prompt(`Ingresa tu nota ${i} de CSS`));
        document.getElementById(`css-nota-${i}`).innerHTML = notasCss[i];
        sumaCss += notasCss[i];
}
        let promedioCss = Math.floor((sumaCss/3)*10)/10;
        document.getElementById("css-nota-promedio").innerHTML = promedioCss;
}

nCss(); 

let notasJs = [];
let sumaJs = 0; 

function nJs() {
    for (let i = 1; i <=3; i++) {
        notasJs[i] = parseInt(prompt(`Ingresa tu nota ${i} de JS`));
        document.getElementById(`js-nota-${i}`).innerHTML = notasJs[i];
        sumaJs += notasJs[i];
}
        let promedioJs = Math.floor((sumaJs/3)*10)/10;
        document.getElementById("js-nota-promedio").innerHTML = promedioJs;
}

nJs();  */