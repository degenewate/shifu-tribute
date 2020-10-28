<template>
  
  <FooterVue />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterVue from "@/components/footer.vue";
export default defineComponent({
  name: "App",
  components: {
    FooterVue
  }
});
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
