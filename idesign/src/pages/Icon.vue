<template>
  <q-page class="flex">
    <VueMarkdown :source="htmlMD"></VueMarkdown>
  </q-page>
</template>

<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        name: 'IconPage',
        components: {
            VueMarkdown
        },
        data() {
            return {
                url: `../../statics/spec/icon.md`,
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
