console.log('llegue a modificar datos');

// Tomamos el parámetro "id" de la URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("parametros");

console.log("ID recibido:", id);

const url = 'http://localhost:4000/api/personasid/' + id;

// Primero traemos los datos actuales
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
      document.getElementById("Apellido").value = persona.Apellido;
      document.getElementById("Nombre").value = persona.Nombre;
      document.getElementById("dni").value = persona.DNI;
      document.getElementById("FechaNacimiento").value = persona.FechaNacimiento;
      document.getElementById("email").value = persona.Email;
    } else {
      alert('⚠️ No se encontraron datos de la persona.');
    }
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
  });


// Evento del botón “Grabar” → actualiza los datos
document.getElementById("grabar").addEventListener("click", async () => {
  const Nombre = document.getElementById("Nombre").value.trim();
  const Apellido = document.getElementById("Apellido").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const email = document.getElementById("email").value.trim();
  const FechaNacimiento = document.getElementById("FechaNacimiento").value.trim();

  // Validar campos
  if (!Nombre || !Apellido || !dni || !email || !FechaNacimiento) {
    alert(" Por favor complete todos los campos antes de guardar.");
    return;
  }

  const confirmar = confirm("¿Desea guardar los cambios?");
  if (!confirmar) {
    alert("Operación cancelada.");
    return;
  }

  const data = {
    Nombre,
    Apellido,
    DNI: dni,
    Email: email,
    FechaNacimiento
  };

  try {
    const response = await fetch(`http://localhost:4000/api/personasid/${id}`, {
      method: "PUT",  // 👈 importante: usamos PUT para actualizar
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar: ${response.statusText}`);
    }

    const result = await response.text();
    alert("✅ Datos actualizados correctamente.");
    console.log("Respuesta del servidor:", result);
    window.location.href = "./index.html";

  } catch (error) {
    console.error("Error:", error);
    alert("❌ Hubo un error al actualizar los datos. Intente nuevamente.");
  }
});
