<template>
  <div class="right-item" v-if="item.checked">
    <div class="right-item__wrapper">
      <div
        class="right-item__square cursor-pointer"
        v-for="(square, index) in item.counter"
        :key="index"
        :style="{backgroundColor: item.color}"
        @click="deleteSquare(item)"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'RightItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    listId: {
      type: Number,
      require: true
    }
  },
  setup (props) {
    const store = useStore()

    const deleteSquare = (item) => {
      store.commit('set', { itemId: item.id, listId: props.listId, param: (item.counter - 1), type: 'delete' })
    }

    return { deleteSquare }
  }
})
</script>

<style scoped lang="scss">
.right-item {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__square {
    width: 15px;
    height: 15px;
  }
}
</style>
