<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar">

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact="">Home</router-link>
      <router-link class="navbar-item" to="/create" exact="">create</router-link>
    </div>

    <div class="navbar-end">
    {{ui}}
    </div>
    
  </nav>

  <div class="columns section">
    <div
      class="column border is-2 ">
      <side-menu></side-menu>
    </div>
    <div class="column border is-10">
      <div class="box">
        <i class="fas fa-lg fa-chevron-left"></i>
      </div>
      
      <router-view/>
    </div>
  </div> <!-- main -->
</div>
</template>

<script>
import { mapGetters } from "vuex";
import SideMenu from './SideMenu.vue';

export default {
  components: {
    sideMenu: SideMenu,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  computed: {
    ...mapGetters({
      ui: 'ui'
    })
  },
  watch: {
    
  },
  async mounted() {
    
  }
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}

</style>
