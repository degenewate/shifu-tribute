<template>
  <a class="button" @click="copy()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 2h-19v19h-2v-21h21v2zm3 2v20h-20v-20h20zm-2 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-6l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-1.93v16h16v-16zm-3 6h-10v1h10v-1zm0 3h-10v1h10v-1zm0 3h-10v1h10v-1z"
      />
    </svg>
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CopyToClipboard",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    async copy() {
      try {
        await navigator.clipboard.writeText(this.text);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
</script>
