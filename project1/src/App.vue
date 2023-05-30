<template>
  <model-app>
    <template v-slot:header>
      <div>Create product</div>
    </template>
    <template v-slot:footer>
      <div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="save">Save changes</button>
      </div>
    </template>
    <input type="text">
  </model-app>
</template>

<script>
import ModelView from '@/components/ModelView'
export default {
  name: 'App',
  components: {
    ModelApp: ModelView
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
