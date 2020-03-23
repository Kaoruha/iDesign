<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    this is intro Page2
    <VueMarkdown :source="htmlMD"></VueMarkdown>
  </q-page>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'IntroPage',
  components:{
    VueMarkdown
  },
  data() {
      return {
          htmlMD:"#### 12",
      }
  },
  props:{

  },
  created(){
    this.test();
    const url = `~spec/test.md`;
    axios.get(url).then((response) => {
      this.htmlMD = response.data;
      print(response.data)
　　});
  },
  methods:{
    test(){
      alert(111)
    }
  }
}
</script>
