class Inventario {
    private static instancia: Inventario;
    private equipos: { nombre: string; tipo: string; estado: string }[] = [];

    // Constructor privado que evit que se cree otra instancia fuera de la clase.
    private constructor() {}

    // Método estático para obtener la instancia de la clase.
    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    // Agregar un equipo al inventario.
    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipos.push({ nombre, tipo, estado });
    }

    // Se listan todos los equipos del inventario.
    public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return this.equipos;
    }
}

// Uso del Singleton.
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
inventario.agregarEquipo("Servidor Dell", "Servidor", "en reparación");
console.log(inventario.listarEquipos()); 