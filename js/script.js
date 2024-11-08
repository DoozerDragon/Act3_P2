const app1 = {
    data(){
        return {
            mensaje: '',
            frutas: [{nombre: 'Manzana', cantidad: 15, precioUnitario: 5}],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0,
        }
    },
    computed: {
        subtotal() {
            return this.frutas.reduce((sum, fruta) => sum + fruta.cantidad * fruta.precioUnitario, 0);
        },
        iva() {
            return this.subtotal * 0.16;
        },
        total() {
            return this.subtotal + this.iva;
        }
    },
    methods: {
        montoFruta(i) {
            return this.frutas[i].cantidad * this.frutas[i].precioUnitario;
        },
        agregar() {
            if (this.nuevaFruta && this.nuevaCantidad >= 0 && this.nuevoPrecio >= 0) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad,
                    precioUnitario: this.nuevoPrecio
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            }
        }
    }
};

const apli2 = Vue.createApp(app1).mount('#seccion');
