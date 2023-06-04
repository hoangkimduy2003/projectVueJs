<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3 col-4">
      <label for="inputPassword" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-12">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          v-model="name"
        />
      </div>
    </div>
    <div class="mb-3 col-4">
      <label for="formFile" class="form-label">Image</label>
      <input
        class="form-control"
        type="file"
        accept="image"
        id="formFile"
        multiple
        @change="onChangeSelectedFiles"
      />
    </div>
    <button type="submit" class="btn btn-success">Success</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      files: [],
    };
  },
  methods: {
    onChangeSelectedFiles(e) {
      this.files = Array.from(e.target.files);
    },
    onSubmit() {
      const formData = new FormData();
      formData.append("name", this.name);
      this.files.forEach((file) => {
        formData.append("files", file);
      });

      this.$request.post('http://localhost:8080/pro',formData).then(res => {
        console.log(res.data);
      })
      
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
