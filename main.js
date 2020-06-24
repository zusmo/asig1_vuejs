import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const app = new Vue({
    el: "#app",
    data: { 
        titulo: 'Hola Mundo VUEJS',
        frutas: [
            {name:'Manzana', cantidad:5},
            {name:'Banano', cantidad:0},
            {name:'Pera', cantidad:2},
            {name:'Uva', cantidad:8}
        ],
    nuevaFruta: '',
    total: 0
    },
    methods:{
        agregarFrutas() {
            this.frutas.push({
                name: this.nuevaFruta, cantidad:0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})