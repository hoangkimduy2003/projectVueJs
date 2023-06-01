<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
  >
    <router-link :to="{ name: 'homePage' }" class="my-0 mr-md-auto font-weight-normal">
      <h5 >Vue Mini Project</h5>
    </router-link>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link class="p-2 text-dark" :to="{ name: 'listProducts' }"
        >Product management</router-link
      >
      <router-link class="p-2 text-dark" :to="{name: 'listUser'}" >User management</router-link>
      <a ></a>
    </nav>
    <a class="btn btn-outline-primary" routerlink="cart">Administrator</a>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style>

</style>
