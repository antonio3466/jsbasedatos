new gridjs.Grid({
    columns: [
        { id: "PersonaID", name: "IdPersona" },
        { id: "Apellido", name: "Apellido" },
        { id: "Nombre", name: "Nombre"},
        { id: "DNI", name: "DNI" },
        { id: "Email", name: "email" },
        { id: "FechaNacimiento", name: "FechaNacimiento"},
        { id: "Operacion", name: "Operacion" ,
        
        formatter: (cell, row) => {
             const personaId = row.cells[0].data; 
             return gridjs.html(`<a href="./modificarDatos.html?parametro=${personaId}" 
                         target="_blank" style="text-decoration: none;">
                            <i class="fa-solid fa-pen-to-square mi-icono-grande"
                            style="text-decoration: none;"
                            ></i> </a>
                            <a href="./modificarDatos.html?parametro=${personaId}" 
                            target="_blank" style="text-decoration: none;">
                            <i class="fa-solid fa-trash mi-icono-grande"
                            
                            style="color: #FF6347; "
                            ></i> </a>`);
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
                
