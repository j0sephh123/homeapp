import Vue from 'vue'
import Vuex from 'vuex'

import books from './books';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books,
  },
  state: {
    redirect: false,
    sideMenu: {
      items: [
        {_id: 1, name: 'books', active: true},
        {_id: 2, name: 'foods', active: false},
      ],
    },
  },
  mutations: {
    toggle(state, {id}) {
      state.sideMenu.items = state.sideMenu.items.filter(item => {
        if(item.active) {
          item.active = false;
          return item;
        } // remove active

        if(item._id === id) {
          item.active = !item.active;
          return item;
        } // toggle active

        return item;
      });
    }, // side menu my-nav
  },
  actions: {

  },
  getters: {
    redirect: state => state.redirect,
    sideNav: state => state.sideMenu.items,
  }
})