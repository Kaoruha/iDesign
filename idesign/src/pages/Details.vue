<template>
  <q-page class="flex">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
    <a :href="editor_tar_url" target="_blank" class="editor" title="在Github上编辑">编辑</a>
    <VueMarkdown :source="htmlMD"></VueMarkdown>
  </q-page>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'DetailsPage',
    components: {
      VueMarkdown
    },
    data() {
      return {
        file_name: '',
        url: '../../statics/spec/',
        // url: 'https://kaoruha.github.io/iDesign/idesign/src/statics/spec/',
        editor_url: 'https://github.com/Kaoruha/iDesign/edit/master/idesign/src/statics/spec/',
        tar_url: '',
        editor_tar_url: '',
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
        this.editor_tar_url = this.editor_url + this.file_name + '.md';
        this.$axios.get(this.tar_url).then((response) => {
          this.htmlMD = response.data;
        }).catch((error) => {
          alert(error)
        });
      },
    }
  }
</script>

<style scoped>
  @import '../css/markdown.css';
</style>

<style lang="sass">


  .editor
    color: rgba(#8e8e8e,1)
    position: absolute
    text-decoration: none

    &:hover
      cursor: pointer
      color: #1976D2

</style>
