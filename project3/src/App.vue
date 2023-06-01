<template>
  <navbar-menu></navbar-menu>
  <router-view></router-view>
</template>

<script>
import NavbarMenu from "./components/NavbarMenu.vue";
export default {
  name: "App",
  components: { NavbarMenu },
  created(){
    
  },
  mounted() {
    
  },
};
</script>

<style>

</style>
