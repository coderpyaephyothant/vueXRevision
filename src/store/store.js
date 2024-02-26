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
        ],
        devices:[
            {name:'Asus Vivibooki7(12Gen)', price:2900000, id:1},
            {name:'Samsung Galaxy A14', price:6500000, id:2}
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
        },
        promotionDevices: state => {
            const promotionDevices = state.devices.map(
                dev => {
                    return {
                        name: '***' + dev.name + '***',
                        price: dev.price /2
                    }
                }
            )
            return promotionDevices;
        }
    },

    mutations:{
        reducePrice:(state,value) => {
                state.products.forEach(el => {
                    el.price -= value
                });
        },
        reduceDevicePrices:(state,value) => {
                    state.devices.forEach(dev => {
                        dev.price -= value
                    })
            }
    },


    actions:{
        reduceThePrice:(contex,payload) => {
            setTimeout(function(){
                contex.commit('reducePrice',payload)
            },3000)
        },
        reduceDevicesPrice:(context,payload)=>{
            setTimeout(function(){
                context.commit('reduceDevicePrices',payload)
            },2000)


        }
    }
})    