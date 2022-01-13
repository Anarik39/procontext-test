<template>
  <div class="card">
    <div class="card__wrapper">
      <left-list v-for="list in listsItems" :key="list.id" :items="list.items" :listId="list.id"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LeftList from './LeftList.vue';

export default defineComponent({
  name: 'LeftCardLists',
  components: {
    LeftList,
  },
  props: {
    listsItems: {
      type: Array,
      default: () => ([]),
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  &__wrapper {
    width: 300px;
    max-width: 100%;
  }
}
</style>
