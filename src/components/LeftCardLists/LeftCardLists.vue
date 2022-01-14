<template>
  <div class="card">
    <div class="card__container">
      <left-list v-for="list in listsItems" :key="list.id" :listItem="list"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LeftList from './LeftList.vue'

export default defineComponent({
  name: 'LeftCardLists',
  components: {
    LeftList
  },
  props: {
    listsItems: {
      type: Array,
      default: () => ([])
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  &__container {
    width: 300px;
    max-width: 100%;
  }
}
</style>
