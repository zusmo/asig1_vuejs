import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const vm = new Vue({
    el: '#app',
    data: {
        newPoke:'',
        pokeData: [
            {pokeName:'', trName:'', age:0}
        ],
    
    },
    methods: {
        addPoke () {
           
        },
        addTrainer () {
            console.log('diste click2');
        },
        addAge () {
            console.log('diste click3');
        }
    }
    
})