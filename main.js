import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const vm = new Vue({
    el: '#app',
    data: {
        newPoke:'',
        newTrainer:'',
        newAge:0,
        pokeData: [
            
        ],
    
    },
    methods: {
        addPokeData () {
            const pokeUser = {
                pokemon: this.newPoke,
                trainer: this.newTrainer,
                age: this.newAge
            };
            this.pokeData.push(pokeUser);
        },
        removePokeData () {

        }
    }
    
})