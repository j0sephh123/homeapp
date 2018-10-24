import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const books = {
  namespaced: true,
  state: {     
    books: [],
    search: '',
  },
  mutations: {
    create(state, book) {
      console.log(book);
      state.books.push(book);
    },
    search(state, val) {
      state.search = val;
    },
  },
  actions: {
    async create({commit}, data) {
      const res = await api.post('/books', data);
      if(res.status === 200) {
        commit('create', res.data);
      }
    },
    // async updateNote({}) {
    //   const res = await api.put('/notes/' + '5bcf34c90f98fe2cecc3562e', data);
    //   console.log(res.data);
    // }
  },
  getters: {
    books: state => state.books,
  }
}

export default books;