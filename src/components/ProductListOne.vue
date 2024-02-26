<template>
  <div>
    <h3>Product List One</h3>
    <div v-if="products">
        <div v-for="product in products" :key="product.id">
            {{product.name}} = {{product.price}}
        </div>
    </div>
    <button @click="reduceProductPrice(10)">ReduceProductPrices</button>
  </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products
        },
        promotionProducts(){
            console.log('promotionProducts')
            return this.$store.getters.promotionProducts
        }
    },
    // call actions by dispatch
    methods:{
        reduceProductPrice:function(amount){
            this.$store.dispatch('reduceThePrice',amount)
        }
    }
}
</script>

<style scoped>

</style>