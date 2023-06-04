<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <router-link :to="{name: 'product'}" class="a">
      <img src="https://bom.so/FvIHum" alt=""  class="d-inline-block align-text-top">
    </router-link>
  </div>
</nav>
  <div class="sidebar">
    <router-link :to="{name: 'product'}" class="a">
      Product
    </router-link>
    <router-link :to="{name: 'category'}" class="a">
      Category
    </router-link>
    <router-link :to="{name: 'brand'}" class="a">
      Brand 
    </router-link>
    <router-link :to="{name: 'status'}" class="a">
      Status
    </router-link>

  </div>
  
  <div class="content">
    <router-view/>
  </div>
  
</template>

<style>
.sidebar {
      height: 100%;
      width: 200px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #f8f9fa;
      margin-top: 42px;
    }
    
    .sidebar .a {
      padding: 8px 16px;
      color: gray;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      display: block;
    }
    
    .sidebar .a:hover {
      background-color: #e9ecef;
      color: black;
    }
    
    .content {
      margin-left: 200px;
      padding: 20px;
    }
</style>
