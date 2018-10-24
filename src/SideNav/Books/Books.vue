<template>
<nav class="panel">
  <p class="panel-heading">
    Books
  </p> <!-- heading -->

  <search></search>
  
  <p class="panel-tabs">
    <a class="is-active">all</a>
  </p> <!-- tabs -->

  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      button
    </button>
  </div> <!-- button -->
</nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import SearchVue from '../../components/Search.vue';

export default {
  components: {
    search: SearchVue
  },
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
      
    })
  },
  async mounted(){
    console.log('books.vue');
  },
  watch: {
    
  }
}
</script>
