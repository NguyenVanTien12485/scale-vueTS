<script setup lang="ts">
// import a reference to our ItemsView component
import ItemsView from './views/Items.view.vue'

const metaEnv = import.meta.env
</script>

<template>
  <div class="home">
    [{{ metaEnv }}]
    <ItemsView />
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
}
</style>
