console.log('Llegué a modificar datos');

// Obtener ID de la URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("parametros");

console.log("ID recibido:",id);

// URL de la API
const url = 'http://localhost:4000/api/personasid/' + id;

console.log(url);

// Obtener datos existentes
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la red: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.length > 0) {
      const persona = data[0];

      // Cargar los datos en los campos
      document.getElementById("Apellido").value = persona.Apellido;
      document.getElementById("Nombre").value = persona.Nombre;
      document.getElementById("dni").value = persona.DNI;
      document.getElementById("email").value = persona.Email;
      document.getElementById("FechaNacimiento").value = persona.FechaNacimiento;
    } else {
      console.log('No se encontraron datos de la persona.');
    }
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
  });


  document.getElementById("grabar").addEventListener('click', async()=>{

    const Nombre = document.getElementById("Nombre").value;
    const Apellido = document.getElementById("Apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const FechaNacimiento = document.getElementById("FechaNacimiento").value;

    const data = {
        id: id,
        Nombre : Nombre,
        Apellido: Apellido,
        dni: dni,
        email: email,
        FechaNacimiento: FechaNacimiento
    };
    
    try {

        const response = await fetch("/save-Actualizapersonas", {
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
        alert("hubo un error al actualizar los datos.");
     }
});
    