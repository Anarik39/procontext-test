import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    listsItems: [],
  }),
  mutations: {
    setListItems(state, payload) {
      state.listsItems = [...state.listsItems, payload];
    },
    set(state, { itemId, listId, input }) {
      state.listsItems.forEach((list) => {
        if (list.id === listId) {
          list.items.forEach((itemList) => {
            if (itemList.id === itemId) {
              if (input === 'counter') {
                // eslint-disable-next-line no-param-reassign
                itemList.state = !itemList.state;
              } else if (typeof input === 'number') {
                // eslint-disable-next-line no-param-reassign
                itemList.counter = input;
              } else {
                // eslint-disable-next-line no-param-reassign
                itemList.color = input;
              }
            }
          });
        }
      });
    },
  },
  getters: {
    getItems: (state) => state.listsItems,
  },
  actions: {
    fetchLists({ commit }) {
      // eslint-disable-next-line no-plusplus
      for (let listIndex = 1; listIndex <= 3; listIndex++) {
        const items = [];

        // eslint-disable-next-line no-plusplus
        for (let itemIndex = 1; itemIndex <= Math.floor(4 + Math.random() * (10)); itemIndex++) {
          const color = `#${Math.random().toString(16).substr(2, 6)}`;
          items.push({
            id: itemIndex,
            color,
            counter: Math.floor(1 + Math.random() * (10)),
            state: false,
          });
        }
        commit('setListItems', {
          id: listIndex,
          items,
          show: false,
        });
      }
    },
  },
});
