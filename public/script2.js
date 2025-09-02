

new gridjs.Grid({
    columns: [
        { id: "PersonaId", name: "PersonaId" },
        { id: "Apellido", name: "Apellido" },
        { id: "Nombre", name: "Nombre"},
        { id: "DNI", name: "DNI" },
        { id: "fechaNacimiento:", name: "fechaNacimeminto"}
        ],
    
        sort: true,
        server: {
            url: "http://localhost:4000/api/personas",
            then: data => data.map(post => [post.PersonaId, post.Apellido, post.Nombre, post.Email, post.DNI, post.FechaNacimiento])
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