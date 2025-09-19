console.log('llegue a modificar datos');

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("parametros")

console.log(id);
document.getElementById('variable').innerText = id;