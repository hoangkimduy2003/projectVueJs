<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary">
    <router-link
      :to="{ name: 'formProduct' }"
      style="color: white; text-decoration: none"
      >Add product
    </router-link>
  </button>
  <div>
    <div
      class="modal fade"
      id="detail"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form @submit.prevent="save">
        <div class="modal-dialog">
          <div class="modal-content">
            <fieldset disabled>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="reset"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <!-- <div class="mb-3">
                    <label for="formFileMultiple" class="form-label"
                      >Images</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="formFileMultiple"
                      accept="image/*"
                      multiple
                    />
                  </div> -->
                  <div class="mb-3">
                    <label for="name" class="form-label">Name product</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name product"
                      v-model="product.name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="Quantity" class="form-label">Quantity</label>
                    <input
                      type="number"
                      class="form-control"
                      id="Quantity"
                      v-model="product.quantity"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="sell" class="form-label">Sell price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="sell"
                      v-model="product.sellPrice"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="origin" class="form-label">Origin price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin"
                      v-model="product.originPrice"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label for="disabledSelect" class="form-label">
                      Category
                    </label>
                    <select
                      id="disabledSelect"
                      class="form-select"
                      v-model="product.category.id"
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
                    >
                      <option :value="null">-Status-</option>
                      <option v-for="s in statusList" :key="s.id" :value="s.id">
                        {{ s.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="reset"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Search -->
    <form @submit.prevent="a"></form>

    <!-- table -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <!-- <th scope="col">Image</th> -->
          <th scope="col">Name</th>
          <th scope="col">Brand</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in products" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <!-- <td>
            <img
              :src="urlImg + p.images[0]"
              style="width: 50px; height: 70px"
            />
          </td> -->
          <td>{{ p.name }}</td>
          <td>{{ p.brand.name }}</td>
          <td>{{ p.category.name }}</td>
          <td>{{ p.sellPrice }}</td>
          <td>{{ p.status.name }}</td>
          <td>
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#detail"
              @click="details(p.id)"
            >
              <i class="bi bi-eye"></i>
            </button>
            &nbsp;
            <button
              type="button"
              class="btn btn-warning"
            >
            <router-link  :to="{ name:'formProductEdit', params:{id: p.id} }"><i class="bi bi-brush"></i></router-link>
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger" @click="deletePro(p.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImg: "http://localhost:8080/image/",
      categories: [],
      brands: [],
      statusList: [],

      statusButton: true,

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
        files: [],
      },
      search: {
        name: null,
        brandId: null,
        statusId: null,
        categoryId: null,
        pageIndex: null,
        pageSize: null,
      },
    };
  },
  created() {
    this.showAll();
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
      this.$request
        .post("http://localhost:8080/product/search", this.search)
        .then((res) => {
          this.products = res.data.data;
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
    },
    deletePro(id){
      if(confirm("Are you sure you want to delete")){
        this.$request.delete("http://localhost:8080/product/" + id).then((res)=>{
          if(res.data.status === 200){
            this.showAll();
            alert(res.data.msg);
          }
        })
      }
    }
  },
};
</script>

<style scoped>
.bi {
  color: white;
}
</style>