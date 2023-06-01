<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <td>#</td>
        <td>Name</td>
        <td>Image</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product,index) in listProduct" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ product.name }}</td>
        <td> <span v-for="(img,index) in product.images" :key="index">{{ img }}</span></td>
        <td>{{ index }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data() {
      return {
        listProduct: []
      }
    },
    
    created() {
      this.getAll();
    },
    methods: {
      getAll(){
        this.$request.get('http://localhost:8080/product').then(res =>{
          this.listProduct = res.data;
          console.log(this.listProduct);
        }) 
      }     
    },
  }
</script>

<style lang="scss" scoped>

</style>