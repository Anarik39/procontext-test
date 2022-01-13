<template>
  <div class="left-list">
    <div class="left-list__container">
      <label>
        <input type="checkbox">
        <span>list {{ listId }}</span>
      </label>
      <ul class="left-list__list">
        <li class="left-list__item" v-for="item in items" :key="item.id">
          <left-list-item :item="item" :listId="listId"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LeftListItem from './LeftListItem.vue'

export default defineComponent({
  name: 'LeftList',
  components: { LeftListItem },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    listId: {
      type: Number,
      require: true
    }
  }
})
</script>

<style scoped lang="scss">
.left-list {
  &__container {
    border-bottom: 1px solid;
    padding: 12px 0;
  }

  &__list {
    margin: 5px 0;
    list-style-type: none;
  }

  &__item:not(&__item:last-child) {
    padding-bottom: 4px;
  }
}
</style>
