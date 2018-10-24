<template>
<p class="control has-icons-left">
  <input v-model="search" class="input" type="text" placeholder="search">
  <span class="icon is-left">
    <i class="fas fa-search"></i>
  </span>
</p>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      
    })
  },
  computed: {
    ...mapGetters({
      
    }),
    search: {
      get() {
        return this.$store.getters['books/search'];
      },
      set(val) {
        this.$store.commit('books/search', val)
      }
    }
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
