class persona {

    nombre = "";
    apellido = "";
    #vive = true;  
    dni = 0;
    fechaNaciminto = "";
    estadoCivil = "";

    constructor(dni, vive) {
        this.dni = dni;
        this.#vive = vive; 
    }

    matar() {
        this.#vive = false;  
        console.log("Muerto");
    }

    revivir() {
        this.#vive = true;  
        console.log("Vivo");
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Fecha de Nacimiento: ${this.fechaNaciminto}`);
        console.log(`Estado Civil: ${this.estadoCivil}`);
  
    }
}

let mario = new persona(1223, true);


mario.nombre = "Mario";
mario.apellido = "mario";
mario.fechaNaciminto = "2006-1-2";
mario.estadoCivil = "Soltero";


mario.mostrarInformacion();


mario.matar();
