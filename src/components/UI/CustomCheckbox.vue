<template>
  <div class="custom-input">
    <label class="custom-input__label">
      <input
        class="custom-input__input"
        type="checkbox"
        @input="setItemState(listItem)"
        :disabled="showDot"
      >
      <span
        class="custom-input__span"
        :class="[showDot ? 'custom-input__span--disabled' : '']"/>
    </label>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CustomCheckbox',
  props: {
    listItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const store = useStore()
    const showDot = ref(false)

    const setItemState = (listItem) => {
      store.commit('setCheckedList', { listId: listItem.id })
    }

    watch(props.listItem, () => {
      showDot.value = !(props.listItem.items.every((item) => item.checked === false) ||
        props.listItem.items.every((item) => item.checked === true))
    })

    return {
      setItemState,
      showDot
    }
  }
})
</script>

<style scoped lang="scss">
.custom-input {
  &__label {
    position: relative;
  }

  &__input {
    display: none;

    &:checked ~ .custom-input__span {
      background: #0075ff;
    }

    &:disabled ~ .custom-input__span {
      background: #ccc !important;
    }

    &:checked ~ .custom-input__span:after {
      visibility: visible;
    }
  }

  &__span {
    width: 13px;
    height: 13px;
    border: 1px solid;
    display: inline-block;
    border-radius: 2px;
    vertical-align: text-top;
    margin: 0 6px;

    &:after {
      content: "";
      position: absolute;
      top: 1px;
      left: 10px;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
      height: 6px;
      width: 3px;
      transform: rotate(45deg);
    }
  }

  &__span--disabled:after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid;
    border-radius: 50%;
    background: black;
    height: 4px;
    width: 4px;
  }
}
</style>
