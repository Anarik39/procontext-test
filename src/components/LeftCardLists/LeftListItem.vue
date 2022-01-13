<template>
  <div class="left-item">
    <label class="left-item__label">
      <input type="checkbox" @input="setItemState(item.id, listId)" :checked="item.state">
      <span>item {{ item.id }}</span>
    </label>
    <input class="left-item__input left-item__input-number" type="number"
           :value="item.counter"
           min="0" @input="setCounter($event.target.value, item.id, listId)">
    <input class="left-item__input left-item__input-color" type="color"
           :value="item.color" @input="setColor($event.target.value, item.id, listId)">
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'LeftListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    listId: {
      type: Number,
      require: true,
    },
  },
  setup() {
    const store = useStore();

    const setItemState = (itemId, listId) => {
      store.commit('set', { itemId, listId, input: 'counter' });
    };

    const setCounter = (counter, itemId, listId) => {
      // eslint-disable-next-line radix
      store.commit('set', { itemId, listId, input: parseInt(counter) });
    };

    const setColor = (color, itemId, listId) => {
      store.commit('set', { itemId, listId, input: color });
    };

    return {
      setCounter,
      setColor,
      setItemState,
    };
  },
});
</script>

<style scoped lang="scss">
.left-item {
  display: flex;
  align-items: center;

  &__label {
    flex: 1;
  }

  &__input {
    border: none;
    background: none;

    &-number {
      width: 30px;
      text-align: center;
    }

    &-color {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
}
</style>
