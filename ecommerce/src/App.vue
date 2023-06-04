<template>
  <div>
    <button @click="addInput">Thêm Input</button>
    <form @submit.prevent="onSubmit">
      <div v-for="(input, index) in inputs" :key="index">
        <input type="text" placeholder="Nhập dữ liệu" v-model="inputData[index].id" />
      <input type="text" placeholder="Nhập dữ liệu" v-model="inputData[index].name" />
      <img alt="">
      <button @click="subInput(index)">Xoá Input</button>
    </div>
    <button type="submit">Ok</button>
    </form>
  </div>
</template>

<script>

export default{
  data() {
    return {
      inputs: [],
      inputData: []
    }
  },
  methods: {
    addInput() {
      this.inputs.push({});
      this.inputData.push({});
    },
    subInput(index){
      this.inputs.splice(index, 1);
      this.inputData.splice(index, 1);
    }
    ,onSubmit(){
      this.inputData.forEach((res)=>{
        console.log(res);
      })
     
    }
  },
}
</script>

<style>

</style>
