<template>
  <div class="wrapper">
    <left-card-lists :listsItems="listsItems"/>
    <right-card-items :listsItems="listsItems"/>
  </div>
</template>

<script>

import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import RightCardItems from '../components/RightCardItems/RightCardItems.vue'
import LeftCardLists from '../components/LeftCardLists/LeftCardLists.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { LeftCardLists, RightCardItems },
  setup () {
    const store = useStore()
    store.dispatch('fetchLists')
    const listsItems = computed(() => store.getters.getItems)
    return { listsItems }
  }
})
</script>

<style lang="scss">
@import "src/SCSS/main";

.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 20px;
}

</style>
