<template>
  <q-page class="flex">
    <VueMarkdown :source="htmlMD"></VueMarkdown>
  </q-page>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'ButtonPage',
    components: {
      VueMarkdown
    },
    data() {
      return {
        file_name: '',
        // url: '../../statics/spec/',
        url: 'https://kaoruha.github.io/iDesign/idesign/src/statics/spec/',
        tar_url: '',
        htmlMD: '',
      }
    },
    props: {},
    created() {
      this.get_markdown()
    },
    watch: {
      '$route': function (to, from) {
        //执行数据更新查询
        this.htmlMD = '';
        this.get_markdown();
      }
    },
    methods: {
      get_markdown() {
        this.file_name = this.$route.path.split("/")[1]
        this.tar_url = this.url + this.file_name + '.md';
        this.$axios.get(this.tar_url).then((response) => {
          this.htmlMD = response.data;
        }).catch((error) => {
          alert(error)
        });
      }
    }
  }
</script>

<style scoped>
  @import '../css/markdown.css';
</style>
