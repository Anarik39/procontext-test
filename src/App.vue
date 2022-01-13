<template>
  <main-layout/>
</template>

<script>
import { defineComponent } from 'vue'
import MainLayout from './layouts/MainLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout
  }
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
