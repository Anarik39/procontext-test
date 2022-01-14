<template>
  <div class="left-item">
    <label class="left-item__label cursor-pointer">
      <input type="checkbox"
             class="left-item__input"
             @input=" setItemState(item.id, listId)"
             :checked="item.checked">
      <span class="left-item__label-span">item {{ item.id }}</span>
    </label>
    <div>{{ counter }}</div>
    <input class="left-item__input left-item__input-number"
           type="number"
           min="0"
           max="99"
           v-model.number="counter"
    >
    <input class="left-item__input left-item__input-color cursor-pointer"
           type="color"
           :value="item.color"
           @input="setColor($event.target.value, item.id, listId)">
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LeftListItem',
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

    const counter = computed({
      get () {
        return props.item.counter
      },
      set (val) {
        setCounter(val)
      }
    })

    const setItemState = (itemId, listId) => {
      store.commit('set', { itemId, listId, type: 'counter' })
    }

    const setColor = (color, itemId, listId) => {
      store.commit('set', { itemId, listId, param: color, type: 'color' })
    }

    const setCounter = (number) => {
      if (number < 0 || !number) {
        store.commit('set', { itemId: props.item.id, listId: props.listId, param: 0, type: 'number' })
      } else if (number > 99) {
        store.commit('set', { itemId: props.item.id, listId: props.listId, param: 99, type: 'number' })
      } else {
        store.commit('set', { itemId: props.item.id, listId: props.listId, param: number, type: 'number' })
      }
    }

    return {
      counter,
      setColor,
      setItemState
    }
  }
})
</script>

<style scoped lang="scss">
.left-item {
  display: flex;
  align-items: center;

  &__label {
    flex: 1;
  }

  &__label-span {
    cursor: pointer;
  }

  &__input {
    border: none;
    background: none;

    &-number {
      width: 30px;
      text-align: center;
      border: 1px solid;
    }

    &-color {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
