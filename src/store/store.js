import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:'fried chicken spicy', price:8000,id:1},
            {name:'fried chicken seoul',price:9000,id:2},
            {name:'strawberry juice', price:5000,id:3},
            {name:'orange juice', price:5000,id:4}
        ]
    },
    getters:{
        promotionProducts: state =>{
            const promoProducts = state.products.map(item => {
                return {
                    name:'**'+ item.name+'**',
                    price:item.price/2
                }
            })
                return promoProducts;
        }
    }
})    