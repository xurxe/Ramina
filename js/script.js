const body = document.querySelector('body');

let H = Math.round(Math.random() * (359 - 300) + 300);
let S = Math.round(Math.random() * (100 - 80) + 80);
let L = 95;

let hsl = `hsl(${H}, ${S}%, ${L}%)`;

body.style.background = hsl;