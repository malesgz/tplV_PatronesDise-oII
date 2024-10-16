// Sistema de inventarios viejos.
class InventarioViejo implements Inventario {
    equipos: { nombre: string, tipo: string, estado: string }[];

    constructor() {
        this.equipos = [];
    }

    public listarEquipos() {
        return this.equipos;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string ): void {
        const equipo = {
            nombre : nombre,
            tipo: tipo,
            estado: estado

        } 
        this.equipos.push(equipo);
    }
}

interface Inventario {
    equipos: { nombre: string, tipo: string, estado: string }[];
}

// Adaptador entre el sistema del inventario nuevo y viejo.
class AdaptadorInventario {

    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo( nombre: string, tipo: string, estado: string ) {
        this.inventarioViejo.agregarEquipo(nombre, tipo, estado);
    }

    public listarEquipos() {
        return this.inventarioViejo.listarEquipos();
    }
}

// Uso del adaptardor.
const inventarioViejo = new InventarioViejo();

// Se pasa a la instancia creada el viejo inventario.
const adaptador = new AdaptadorInventario(inventarioViejo);

// Se agrega uno y se muestran los resultados por consola.
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());