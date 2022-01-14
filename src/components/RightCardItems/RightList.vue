<template>
  <div class="right-list">
    <div class="right-list__container">
      <div>list {{ listItem.id }}</div>
    </div>
    <div class="right-list__items">
      <right-item v-for="item in listItem.items" :key="item.id" :item="item" :listId="listItem.id"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RightItem from './RightItem'

export default defineComponent({
  name: 'RightList',
  components: { RightItem },
  props: {
    listItem: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style scoped lang="scss">
.right-list {
  &__container {
    border: 1px solid;
    padding: 12px;
  }

  &__items {
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
