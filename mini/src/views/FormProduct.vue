<template>
  <div class="col-6">
    <form @submit.prevent="save">
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="name" class="form-label">Name product</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name product"
              v-model="product.name"
              @blur="validate"
              :class="{ 'is-invalid': err.name }"
            />
          </div>
          <div class="mb-3">
            <label for="Quantity" class="form-label">Quantity</label>
            <input
              type="number"
              class="form-control"
              id="Quantity"
              v-model="product.quantity"
              @blur="validate"
              :class="{ 'is-invalid': err.quantity }"
            />
          </div>
          <div class="mb-3">
            <label for="sell" class="form-label">Sell price</label>
            <input
              type="number"
              class="form-control"
              id="sell"
              v-model="product.sellPrice"
              @blur="validate"
              :class="{ 'is-invalid': err.sellPrice }"
            />
          </div>
          <div class="mb-3">
            <label for="origin" class="form-label">Origin price</label>
            <input
              type="number"
              class="form-control"
              id="origin"
              v-model="product.originPrice"
              @blur="validate"
              :class="{ 'is-invalid': err.originPrice }"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="disabledSelect" class="form-label"> Category </label>
            <select
              id="disabledSelect"
              class="form-select"
              v-model="product.category.id"
              @blur="validate"
              :class="{ 'is-invalid': err.category }"
            >
              <option :value="null" selected>-Category-</option>
              <option v-for="c in categories" :key="c.id" :value="c.id">
                {{ c.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="brand" class="form-label">Brand</label>
            <select
              id="brand"
              class="form-select"
              v-model="product.brand.id"
              @blur="validate"
              :class="{ 'is-invalid': err.brand }"
            >
              <option :value="null">-Brand-</option>
              <option v-for="b in brands" :key="b.id" :value="b.id">
                {{ b.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="status" class="form-label">Status</label>
            <select
              id="status"
              class="form-select"
              v-model="product.status.id"
              @blur="validate"
              :class="{ 'is-invalid': err.status }"
            >
              <option :value="null">-Status-</option>
              <option v-for="s in statusList" :key="s.id" :value="s.id">
                {{ s.name }}
              </option>
            </select>
            <div :class="{ 'invalid-feedback': err.status }" v-if="err.status">
              {{ err.status }}
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="reset"
      >
        Close
      </button>
      <button type="submit" class="btn btn-primary" v-if="!product.id">
        Add
      </button>
      <button type="submit" class="btn btn-primary" v-else>Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      brands: [],
      statusList: [],

      products: [],
      product: {
        id: null,
        name: null,
        quantity: null,
        originPrice: null,
        sellPrice: null,
        category: {
          id: null,
        },
        brand: {
          id: null,
        },
        status: {
          id: null,
        },
      },
      err: {
        id: "",
        name: "",
        quantity: "",
        originPrice: "",
        sellPrice: "",
        category: "",
        brand: "",
        status: "",
        files: "",
      },
    };
  },
  created() {
    this.showAll();
    let idProduct = this.$route.params.id;
    console.log(idProduct);
    if (idProduct) {
      this.details(idProduct);
    }
  },
  methods: {
    convertImage(e) {
      this.product.files = e.target.files;
    },
    validate() {
      this.err = {
        id: "",
        name: "",
        quantity: "",
        originPrice: "",
        sellPrice: "",
        category: "",
        brand: "",
        status: "",
        files: "",
      };
      let isValid = true;
      if (!this.product.name) {
        this.err.name = "Please enter your name";
        isValid = false;
      } else if (!this.product.quantity) {
        this.err.quantity = "Please enter your quantity";
        isValid = false;
      } else if (!this.product.sellPrice) {
        this.err.sellPrice = "Please enter your sell price";
        isValid = false;
      } else if (!this.product.originPrice) {
        this.err.originPrice = "Please enter your origin price";
        isValid = false;
      } else if (this.product.category.id === null) {
        this.err.category = "Please select a category";
        isValid = false;
      } else if (this.product.brand.id === null) {
        this.err.brand = "Please select a brand";
        isValid = false;
      } else if (this.product.status.id === null) {
        this.err.status = "Please select a status";
        isValid = false;
      }
      return isValid;
    },
    showAll() {
      this.$request.get("http://localhost:8080/category").then((res) => {
        this.categories = res.data.data;
      });
      this.$request.get("http://localhost:8080/brand").then((res) => {
        this.brands = res.data.data;
      });
      this.$request.get("http://localhost:8080/status").then((res) => {
        this.statusList = res.data.data;
      });
    },

    details(id) {
      this.$request.get("http://localhost:8080/product/" + id).then((res) => {
        this.product = res.data.data;
      });
    },
    reset() {
      this.product = {
        id: null,
        name: null,
        quantity: null,
        originPrice: null,
        sellPrice: null,
        category: {
          id: null,
        },
        brand: {
          id: null,
        },
        status: {
          id: null,
        },
        files: [],
      };
      this.$router.push({ name: "product" });
    },
    save() {
      if(!this.product.id){
        if (this.validate()) {
        if (confirm("Do you want to add products?")) {
          this.$request
            .post("http://localhost:8080/product", this.product)
            .then((res) => {
              if (res.data.status === 200) {
                this.$router.push({ name: "product" });
              }
            });
        }
        
      }
    }
    else{
        if (this.validate()) {
        if (confirm("Do you want to update products?")) {
          this.$request
            .put("http://localhost:8080/product/"+this.product.id, this.product)
            .then((res) => {
              if (res.data.status === 200) {
                this.$router.push({ name: "product" });
              }
            });
        }
        
      }
    }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>