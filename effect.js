// buscamos el canvas usando el identificador
const canvas = document.getElementById('canv');
// seleccionamos su contexto
const ctx = canvas.getContext('2d');
// guardamos su hancho y alto
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
// seleccionamos un color de fondo
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
/* dividimos el espacio en 40 columnas, enposicion "Y" y pintamos desde arriba
y que cada columna parte desde 0*/
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
// se crea la función "matrix"
function matrix () {
  /* seleccionamos el color negro para pintar, pero con una capa muy transparente
  y que coloque esa capa cada ves que pinta*/
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  // seleccionamos el color verde y una fuente
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  // por cada cada posicion "Y" de una columna, dame una posicion y un indice
  ypos.forEach((y, ind) => {
    // calculame un caracter al hazar
    const text = String.fromCharCode(Math.random() * 128);
    // calculame la posición "X" donde te dibujas
    const x = ind * 20;
    // alli escribiras el texto
    ctx.fillText(text, x, y);
    /* restablecer aleatoriamente el final de la columna si tiene
    al menos 100 px de alto*/
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    /*de lo contrario, simplemente mueva la coordenada
    y de la columna 20px hacia abajo*/
    else ypos[ind] = y + 20;
  });
}
// la función se ejecutara cada 50milisegundos
setInterval(matrix, 50);