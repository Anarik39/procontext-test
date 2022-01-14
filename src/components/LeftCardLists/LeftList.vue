<template>
  <div class="left-list">
    <div class="left-list__container">
      <div class="left-list__summary">
        <img
          src="@/assets/arrow.png"
          alt=">"
          class="left-list__img cursor-pointer"
          :class="[showList ? 'left-list__img--rotate' : '']"
          @click="showList = !showList">
        <custom-checkbox :listItem="listItem"/>
        <span
          class="cursor-pointer"
          @click="showList = !showList">list {{ listItem.id }}</span>
      </div>
      <ul class="left-list__list" v-show="showList">
        <li class="left-list__item"
            v-for="item in listItem.items"
            :key="item.id">
          <left-list-item
            :item="item"
            :listId="listItem.id"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LeftListItem from './LeftItem.vue'
import CustomCheckbox from '../UI/CustomCheckbox'

export default defineComponent({
  name: 'LeftList',
  components: { CustomCheckbox, LeftListItem },
  props: {
    listItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
    return {
      showList: ref(false)
    }
  }
})
</script>

<style scoped lang="scss">
.left-list {
  &__container {
    border-bottom: 1px solid;
    padding-bottom: 12px
  }

  &__summary {
    display: flex;
    align-items: center;
  }

  &__input {
    margin: 0 6px;
  }

  &__input--custom {
    display: none;
  }

  &__img {
    vertical-align: text-bottom;

    &--rotate {
      transform: rotate(90deg);
    }
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
