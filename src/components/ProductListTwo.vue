<template>
  <div>
    <h3>Device List Two</h3>
    <div v-if="promotionDevices">
        <div v-for="device in promotionDevices" :key="device.id">
            {{device.name}} = {{device.price}}
        </div>
    </div>
    <button @click="reduceDevicePrice(50000)">reduceDevicePrices</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
computed:{
    ...mapGetters([
        'devices','promotionDevices'

    ]),
        // devices(){
        //     return this.$store.state.devices
        // },
        // promotionDevices(){
        //     return this.$store.getters.promotionDevices
        // }
    },
methods:{
    ...mapActions([
        'reduceDevicesPrice'
    ]),
        reduceDevicePrice(amount){
            this.reduceDevicesPrice(amount)
        }
}

}
</script>

<style scoped>

</style>