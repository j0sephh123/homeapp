<template>
  <div>
    
    <books v-if="activeItem.name === 'books'"></books>
    <foods v-else-if="activeItem.name === 'foods'"></foods>
    
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import BooksVue from '../SideNav/Books/Books.vue';
import FoodsVue from '../SideNav/Foods/Foods.vue';

export default {
  components: {
    books: BooksVue,
    foods: FoodsVue,
  },
  data() {
    return {
      note: '',
    }
  },
  methods: {
    ...mapActions({
      updateNote: 'notes/updateNote',
    })
  },
  computed: {
    ...mapGetters({
      activeItem: 'activeItem',
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>

