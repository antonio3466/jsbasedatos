console.log('llegue a modificar datos');

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("parametros")

console.log(id);
document.getElementById('variable').innerText = id;

document.getElementById("Apellido").value = "santacruz";
document.getElementById("Nombre").value = "antony";
document.getElementById("dni").value = "73848595";
document.getElementById("FechaNacimiento").value = "1/23/32";
document.getElementById("email").value = "gmail.com";