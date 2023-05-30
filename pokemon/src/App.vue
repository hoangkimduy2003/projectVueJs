<template>
  <home-screen
    v-if="status === 'home'"
    @onStart="onHandleBeforeStart($event)"
  ></home-screen>
  <interact-screen v-if="status === 'play'"></interact-screen>
</template>

<script>
import HomeScreen from "./components/HomeScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
export default {
  name: "App",
  components: {
    HomeScreen,
    InteractScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardContext: [],
      },
      status: "home",
    };
  },
  methods: {
    onHandleBeforeStart(config) {
      console.log(config);
      this.settings.totalOfBlocks = config.level;

      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards =[...secondCards,...firstCards];
      console.log(firstCards);
      console.log(cards);
      this.status = "play";
    },
  },
};
</script>