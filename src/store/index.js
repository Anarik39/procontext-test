import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    listsItems: []
  }),
  mutations: {
    setListItems (state, payload) {
      state.listsItems = [...state.listsItems, payload]
    },
    set (state, { itemId, listId, input }) {
      state.listsItems.forEach((list) => {
        if (list.id === listId) {
          list.items.forEach((itemList) => {
            if (itemList.id === itemId) {
              if (input === 'counter') {
                itemList.state = !itemList.state
              } else if (typeof input === 'number') {
                itemList.counter = input
              } else {
                itemList.color = input
              }
            }
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
            counter: Math.floor(1 + Math.random() * (10)),
            state: false
          })
        }
        commit('setListItems', {
          id: listIndex,
          items,
          show: false
        })
      }
    }
  }
})
