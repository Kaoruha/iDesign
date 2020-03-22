<template>
  <q-layout view="hHh lpR fFf">
    <LeftDrawer></LeftDrawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import LeftDrawer from '../components/LeftDrawer.vue'
export default {
  components: {
    LeftDrawer
  },
  data () {
    return {
      left: false
    }
  }
}
</script>