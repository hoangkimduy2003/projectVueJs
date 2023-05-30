<template>
  <div class="card">
    <div class="card_inner" :class="{is_flipped: isFlipped}" @click="onToggleFlipCard">
      <div class="card_face card_faceFront">
        <div class="card_content">Front</div>
      </div>
      <div class="card_face card_faceBack">
        <div class="card_content">Back</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style  scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 120px;
}
.card_inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card_inner.is_flipped {
  transform: rotateY(-180deg);
}
.card_face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card_faceBack {
  background-color: var(--light);
  transform: rotateY(-180deg);
}
</style>