<template>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h3 class="display-5">Product Infomation</h3>
    <router-link :to="{ name: 'listProducts' }">Back</router-link>
  </div>
  <div class="container">
    <form @submit.prevent="save()">
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label"
          >Product name</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="product.name"
            @blur="validate"
            :class="{ 'is-invalid': error.name }"
          />
          <div class="invalid-feedback" v-if="error.name">{{ error.name }}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label"
          >Product price</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="product.price"
            @blur="validate"
            :class="{ 'is-invalid': error.price }"
          />
          <div class="invalid-feedback" v-if="error.price">
            {{ error.price }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label"
          >Product description</label
        >
        <div class="col-sm-9">
          <textarea
            class="form-control"
            rows="3"
            v-model="product.description"
            @blur="validate"
            :class="{ 'is-invalid': error.description }"
          ></textarea>
          <div class="invalid-feedback" v-if="error.description">
            {{ error.description }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label"></label>
        <div class="col-sm-9">
          <button type="submit" class="btn btn-primary">Save</button> &nbsp;
          <button type="reset" class="btn btn-danger">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: "",
        name: "",
        price: "",
        description: "",
      },
      error: {
        name: "",
        price: "",
        description: "",
      },
      listProduct: [],
    };
  },
  created() {
    let prodcutId = this.$route.params.id;
    if (prodcutId) {
      this.detail(prodcutId);
    }
  },
  methods: {
    validate() {
      let isValid = true;
      this.error = {
        name: "", 
        price: "",
        description: "",
      };
      if (!this.product.name) {
        isValid = false;
        this.error.name = "Product name is required";
      } else if (!this.product.price) {
        this.error.price = "Price is required";
        isValid = false;
      } else if (!this.isNumber(this.product.price)) {
        this.error.price = "Price is not number";
        isValid = false;
      } else if (!this.product.description) {
        this.error.description = "Description is required";
        isValid = false;
      }
      return isValid;
    },
    save() {
      if (this.product.id) {
        if (this.validate()) {
          if (confirm("Would you like to update")) {
            this.$request
              .put(`http://localhost:8080/product/${this.product.id}`, this.product)
              .then((res) => {
                if (res.data.status === 200) {
                  alert("Update product successfully");
                  this.$router.push({ name: "listProducts" });
                  return;
                }
              });
          }
        } else {
          alert("Update product failed");
        }
      } else {
        if (this.validate()) {
          if (confirm("Would you like to save")) {
            this.$request
              .post("http://localhost:8080/product", this.product)
              .then((res) => {
                if (res.data.status === 200) {
                  alert("Add product successfully");
                  this.$router.push({ name: "listProducts" });
                  return;
                }
              });
          }
        } else {
          alert("Add product failed");
        }
      }
    },
    detail(productId) {
      this.$request
        .get(`http://localhost:8080/product/${productId}`)
        .then((res) => {
          if (res.data.status === 200) {
            this.product = res.data.data;
          }
        });
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>