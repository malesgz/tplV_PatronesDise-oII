// Se define el contrato que se debe cumplir.
interface Observador {
    actualiza(nombre: string, estado: string): void;
}

// Al implementar la interface debe cumplir con el método de la misma.
class Soporte implements Observador {
    actualiza(nombre: string, estado: string): void {
        console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}`);
    }
}

// Notifica a los observadores si su estado cambia.
class Equipo {
    private observadores: Observador[] = [];
    constructor(private nombre: string, private tipo: string, private estado: string) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualiza(this.nombre, this.estado));
    }
}

// Uso del patrón observer.
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

// Se añade a soporte y cambia el estado.
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");