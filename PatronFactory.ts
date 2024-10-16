// Se define la estructura que tendran los equipos de manera generica.
interface Equipo {
    detalle(): string;
}

// Implementa la interfaz y se inicializan las propiedades.
class EquipoNotebook implements Equipo {
    private nombre: string;
    private ram: string;
    private procesador: string

    constructor(nombre: string, ram: string, procesador: string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    detalle(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

// Equipo desktop.
class EquipoDesktop implements Equipo {
    private nombre: string;
    private ram: string;
    private procesador: string

    constructor(nombre: string, ram: string, procesador: string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    detalle(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

// Equipo servidor.
class EquipoServidor implements Equipo {
    private nombre: string;
    private ram: string;
    private procesador: string

    constructor(nombre: string, ram: string, procesador: string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    detalle(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

// Implementación del patrón que permite crear diferentes tipos de equipos.
class EquipoFactory {
    public crearEquipo(tipo:string, nombre: string, ram: string, procesador: string): Equipo {
        if(tipo === "Notebook"){
            return new EquipoNotebook(nombre, ram, procesador)
        }else if(tipo === "Desktop"){
            return new EquipoDesktop(nombre, ram, procesador)
        }else if(tipo === "Servidor"){
            return new EquipoServidor(nombre, ram, procesador)
        }
        throw new Error('Tipo de equipo no reconocido');
    }
}

// Se obtienen los detalles de un equipo.
const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalle());
