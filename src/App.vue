<template>
<Header />
<div class="container">
  <TextFucker />
  </div>
  <FooterVue />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterVue from "@/components/footer.vue";
import TextFucker from "@/components/textfucker.vue";
import Header from "@/components/header.vue"
export default defineComponent({
  name: "App",
  components: {
    FooterVue,
    TextFucker,
    Header
  }
});
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import '../node_modules/@sweetalert2/theme-bulma/bulma.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }
</style>
