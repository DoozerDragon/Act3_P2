// script.js
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
                // Reiniciar los valores de los campos
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            }
        }
    },
    /*computed: {
        totalFrutas() {
            let total = 0;
            for (let i = 0; i < this.frutas.length; i++) {
                total += this.frutas[i].cantidad;
            }
            return total;
        }
    }*/
};

const apli2 = Vue.createApp(app1).mount('#seccion');
