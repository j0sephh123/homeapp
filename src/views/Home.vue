<template>
  <div>
    {{sideNav}}
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
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
      sideNav: 'sideNav',
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>

