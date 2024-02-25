<template>
  <div>
    <h3>Product List Two</h3>
    <div v-if="products">
        <div v-for="product in promotionProducts" :key="product.id">
            {{product.name}} = {{product.price}}
        </div>
    </div>
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
    }
}
</script>

<style scoped>

</style>