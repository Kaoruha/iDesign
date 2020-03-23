<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <LeftDrawer></LeftDrawer>
      <q-page-container>
        <q-page>
          <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            style="height: 100vh"
            class="container"
          >
            <router-view></router-view>
          </q-scroll-area>

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
  .container
    padding: 36px

</style>
