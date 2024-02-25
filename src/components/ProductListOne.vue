<template>
  <div>
    <h3>Product List One</h3>
    <div v-if="products">
        <div v-for="product in promotionProducts" :key="product.id">
            {{product.name}} = {{product.price}}
        </div>
    </div>
    <button @click="redyceProductPrice">ReduceProductPrices</button>
  </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products
        },
        promotionProducts(){
            return this.$store.getters.promotionProducts
        }
    },
    methods:{
        redyceProductPrice:function(){
            this.$store.commit('reducePrice')
        }
    }
}
</script>

<style scoped>

</style>