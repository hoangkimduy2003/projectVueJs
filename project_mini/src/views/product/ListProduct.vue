<template>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="display-4">Product Management</h2>
    <p><router-link :to="{ name: 'formProduct' }">Add product</router-link></p>
  </div>
  <div class="container">
    <div class="card-deck mb-3 text-left">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in listProduct" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td>
              <button class="btn btn-primary">
                <router-link style="color: white"
                  :to="{ name: 'productDetail', params: { id: product.id } }"
                >
                  Edit
                </router-link>
              </button>
              &nbsp;
              <button class="btn btn-danger" @click="onDetele(product.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listProduct: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$request.get("http://localhost:8080/product").then((res) => {
        this.listProduct = res.data.data;
      });
    },
    onDetele(productId) {
      this.$swal
        .fire({
          title: "Do you want to delete?",
          showCancelButton: true,
          confirmButtonText: "Save",
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$request
              .delete(`http://localhost:8080/product/${productId}`)
              .then((res) => {
                if (res.data.status === 200) {
                  this.getAll();
                }
              });
            this.$swal.fire("Saved!", "", "success");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>