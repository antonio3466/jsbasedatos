console.log("hola");

class repartidor {
    // Atributos o propiedades
    id = 1
    nombre = "";
    #vive = true;
    dni = 0;


    // Metodos



    constructor(dni) {
        this.dni = dni; 
    }

    entregar(){
        console.log("entregando");
    }

    cobrar(){
       
        return 1500;
    }

    recoger(){
        return "recogiendo"
    }



}



var a = true;
let mario = new repartidor(1223);
let jose = new repartidor(1212);
mario.entregar();
console.log(mario.recoger);
console.log(mario.dni);
console.log(jose.dni);





















