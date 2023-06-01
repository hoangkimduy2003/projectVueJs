<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">List product</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'about'}">Add product</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <!-- <form @submit.prevent="onSubmit">
    name: <input type="text" v-model="name" />
    <br />
    images: <input type="file" multiple @change="fileUpload" />
    <button type="submit">Submit</button>

    <input type="text" @change="hienthi" placeholder="input1" />

    <input type="text" @change="hienthi" placeholder="input2" />
  </form> -->
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      // selectedFiles: [],
      // name: "",
    };
  },
  methods: {
    // fileUpload(event) {
    //   this.selectedFiles = Array.from(event.target.files);
    // },
    // onSubmit() {
    //   const formData = new FormData();
    //   formData.append("name", this.name);
    //   this.selectedFiles.forEach((file, index) => {
    //     formData.append(`files[${index}]`, file);
    //   });
    //   console.log(this.selectedFiles);
    //   this.$request
    //     .post("http://localhost:8080/product", formData)
    //     .then((res) => {
    //       console.log(res.data);
    //     });
    // },
  },
};
</script>
<style>
</style>
