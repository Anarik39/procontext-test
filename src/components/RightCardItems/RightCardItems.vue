<template>
  <div class="card">
    <div></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightCardItems',
  components: {},
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
})
</script>

<style scoped lang="scss">

</style>
