<template>
  <q-drawer show-if-above v-model="left" side="left" bordered>
    <div style="max-width: 350px">
      <q-list bordered class="rounded-borders">
        <q-expansion-item expand-separator icon="mail" label="I Design" default-opened>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/values">价值观</q-item>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="mail" label="全局样式" default-opened>
          <q-item class="item" to="/colors">色彩</q-item>
          <q-item class="item" to="/layout">布局</q-item>
          <q-item class="item" to="/font">字体</q-item>
          <q-item class="item" to="/icon">图标</q-item>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="mail" label="组件" default-opened>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
          <q-item class="item" to="/intro">介绍</q-item>
        </q-expansion-item>
      </q-list>
    </div>
  </q-drawer>
</template>


<script>
export default {
  name: 'LeftDrawer',
}
</script>


<style lang="sass">
.item
  color: rgba(#000,1)
  line-height: 2em !important
  padding-left: 72px
  cursor: pointer

  &:hover
    cursor: pointer
    color: #1976D2
</style>
