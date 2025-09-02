/*const { get } = require("express/lib/response");*/

document.getElementById("retroceder").addEventListener("click", function() {
    window.location.href = "./index.html";
})

document.getElementById("grabar").addEventListener('click', async()=>{
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const fechaNacimeminto = document.getElementById("fechaNacimiento").value;
    const data = {
        nombre : nombre,
        apellido: apellido,
        email: email,
        dni: dni,
        fechaNacimeminto: fechaNacimeminto
    };
})