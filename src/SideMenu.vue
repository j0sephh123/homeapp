<template>
  <aside class="menu">
    <p class="menu-label">General </p> <!-- label -->
    <ul class="menu-list">
      <!-- a class="is-active" -->
      <li
        @click="$store.commit('toggle', ({id: item._id}))"
        v-for="item in sideMenuItems" 
        :key="item._id">
        <a
          :class="item.active ? 'is-active' : ''">
          {{item.name}}
        </a>
      </li>
    </ul>
  </aside>
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
      
    }),
  },
  computed: {
    ...mapGetters({
      sideMenuItems: 'sideNav',
    }),
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>

