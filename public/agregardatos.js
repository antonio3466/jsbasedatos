/*const { get } = require("express/lib/response");*/

document.getElementById("retroceder").addEventListener("click", function() {
    window.location.href = "./index.html";
})

document.getElementById("grabar").addEventListener('click', async()=>{

    const Nombre = document.getElementById("Nombre").value;
    const Apellido = document.getElementById("Apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const FechaNacimiento = document.getElementById("FechaNacimiento").value;
    const data = {
        Nombre : Nombre,
        Apellido: Apellido,
        dni: dni,
        email: email,
        FechaNacimiento: FechaNacimiento
    };



    const urlApi = "http://localhost:4000/api/personas"

    try {

        const response = await fetch(urlApi, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)  //send data as json
    });
     const result = await response.text();
     alert(result);  // show a confirmation message
     console.log(result); 
      window.location.href = "./index.html";
    }
     catch (error) {
        console.error("Error:", error);
        alert("hubo un error al guardar los datos.");
     }
});
    