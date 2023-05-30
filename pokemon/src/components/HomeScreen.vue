<template>
  <div class="screen">
    <h1>POKEMON</h1>
    <h3>Chọn chế độ</h3>
    <div class="actions">
      <button @click="onStart(16)">
        <span>4x4</span>
        <span>Dễ</span>
      </button>
      <button @click="onStart(36)">
        <span>6x6</span>
        <span>Cũng dễ</span>
      </button>
      <button @click="onStart(64)">
        <span>8x8</span>
        <span>Cũng hơi dễ</span>
      </button>
      <button @click="onStart(100)">
        <span>10x10</span>
        <span>Hơi hoa mắt</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {

    methods: {
        onStart(level){
            this.$emit("onStart",{level});
        }
    },

};
</script>

<style lang="scss" scoped>
</style>