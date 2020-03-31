<template>
  <q-page class="flex">
    <VueMarkdown :source="htmlMD"></VueMarkdown>
  </q-page>
</template>

<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        name: 'PopupEditorPage',
        components: {
            VueMarkdown
        },
        data() {
            return {
                // url: '../../statics/spec/popup_editor.md',
                url:'https://raw.githubusercontent.com/Kaoruha/iDesign/master/idesign/src/statics/spec/popup_editor.md',
                htmlMD: '',
            }
        },
        props: {},
        created() {
            this.getMDPage()
        },
        methods: {
            getMDPage() {
                this.$axios.get(this.url).then((response) => {
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
