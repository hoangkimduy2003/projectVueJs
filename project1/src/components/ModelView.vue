<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    save(){
      this.$emit('close');
    }
  },
};
</script>

<style lang="scss" scoped>

</style>