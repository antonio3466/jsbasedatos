
console.log('llegue a modificar datos');

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("parametros")

console.log(id);

const url = 'http://localhost:4000/api/personasid/'+id;

console.log(url);
fetch(url)
  .then(response => {

    if (!response.ok)  {

        throw new Error (`Error enla red: ${response.statusText} ` );
    }
    return response.json();

})

.then(data =>  {
    if (data.length > 0){


        const personalbar = data [0] ;
        const PersonaID = personalbar.PersonaID;
        const Nombre = personalbar.Nombre;
        const Apellido = personalbar.Apellido;
        const DNI = personalbar.DNI;
        const Email = personalbar.Email;
        const FechaNacimiento = personalbar.FechaNacimiento;
        

        
    document.getElementById("Apellido").value = Apellido;
    document.getElementById("Nombre").value = Nombre;
    document.getElementById("dni").value = DNI;
    document.getElementById("FechaNacimiento").value = FechaNacimiento;
    document.getElementById("email").value = Email;
    


   } else {
    console.log ('No se encontraron datos de la persona.');
}})
.catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
});





