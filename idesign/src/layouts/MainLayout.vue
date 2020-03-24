<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <LeftDrawer></LeftDrawer>
      <q-page-container>
        <q-page>
            <router-view class="main"></router-view>
        </q-page>
      </q-page-container>


    </q-layout>
  </div>
</template>

<script>
    import LeftDrawer from '../components/LeftDrawer.vue'

    export default {
        components: {
            LeftDrawer
        },
        data() {
            return {
                left: false
            }
        }
    }
</script>

<style lang="sass">
    .main
      padding: 36px 72px 36px 72px
</style>
