new gridjs.Grid({
    columns: [
        { id: "PersonaID", name: "IdPersona" },
        { id: "Apellido", name: "Apellido" },
        { id: "Nombre", name: "Nombre"},
        { id: "DNI", name: "DNI" },
        { id: "Email", name: "email" },
        { id: "FechaNacimiento", name: "FechaNacimiento"},
       // { id: "Operacion", name: "Operacion" },
        
         {name: "Acciones",

            formatter: (cell, row) => {
            const PersonaID = row.cells[0].data;
            return gridjs.html(`<a href="./modificardatos.html?parametro=${PersonaID}" 
                     target="_blank" style="text-decoration: none;" class="fas fa-home"></a>
                     
                     <a href="#" 
                       onclick="event.preventDefault(); eliminarPersona(${PersonaID})"  
                       style="text-decoration: none; color: red;" 
                       class="fas fa-trash" title="Eliminar"></a>
                     
                     `);

         }
        } 
    
      ],


        sort: true,
        server: {
            url: "http://localhost:4000/api/personas",
            then: data => data.map(post => [post.PersonaID, post.Apellido, post.Nombre, post.DNI, post.Email, post.FechaNacimiento, "link" ])
            },
            pagination: true,
            search: true,
            language: {
                "search": "buscar...",
                "pagination": {
                    "previous": "anterior",
                    "next": "siguiente",
                    "of": "de",
                    "results": "resultados",
                    "to": "a"
                    }
                    }
                }).render(document.getElementById("wrapper"));

                async function eliminarPersona(id) {
    if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
        try {
            const response = await fetch(`http://localhost:4000/api/personas/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            if (response.ok) {
                alert("Registro eliminado exitosamente!");
                location.reload();  // Recargar la página
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
            alert("Hubo un problema al eliminar el registro.");
        }
    }
}
                
