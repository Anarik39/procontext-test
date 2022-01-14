<template>
  <div class="card">
    <div class="card__container">
      <right-list v-for="list in listsItems" :key="list.id" :listItem="list"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RightList from './RightList'

export default defineComponent({
  name: 'RightCardItems',
  components: { RightList },
  props: {
    listsItems: {
      type: Array,
      default: () => ([])
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  flex: 1;
}
</style>
