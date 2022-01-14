import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    listsItems: []
  }),
  mutations: {
    setListItems (state, payload) {
      state.listsItems = [...state.listsItems, payload]
    },
    set (state, { itemId, listId, param, type }) {
      state.listsItems.forEach((list) => {
        if (list.id === listId) {
          list.items.forEach((itemList) => {
            if (itemList.id === itemId) {
              if (type === 'counter') {
                itemList.checked = !itemList.checked
              } else if (type === 'number' || type === 'delete') {
                itemList.counter = param
              } else {
                itemList.color = param
              }
            }
          })
        }
      })
    },
    setCheckedList (state, { listId }) {
      state.listsItems.forEach((list) => {
        if (list.id === listId) {
          list.checked = !list.checked
          list.items.forEach((itemList) => {
            itemList.checked = !itemList.checked
          })
        }
      })
    }
  },
  getters: {
    getItems: (state) => state.listsItems
  },
  actions: {
    fetchLists ({ commit }) {
      for (let listIndex = 1; listIndex <= 3; listIndex++) {
        const items = []
        for (let itemIndex = 1; itemIndex <= Math.floor(4 + Math.random() * (10)); itemIndex++) {
          const color = `#${Math.random().toString(16).substr(2, 6)}`
          items.push({
            id: itemIndex,
            color,
            counter: Math.floor(1 + Math.random() * (40)),
            checked: false
          })
        }
        commit('setListItems', {
          id: listIndex,
          items,
          checked: false
        })
      }
    }
  }
})
