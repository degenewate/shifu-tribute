<template>
  <div class="box">
    <p class="title">what shall i fuck today?</p>
    <div class="m-3">
      <textarea
        class="textarea"
        placeholder="exsistense is pain or someething idk its ur job to think of something"
        rows="10"
        v-model="text"
      ></textarea>
    </div>
    <div class="level is-mobile m-3">
      <button class="button is-danger is-rounded level-item is-hoverable" @click="Convert()">
        lets gooo
      </button>
      <CopyBTN class="level-item is-rounded" :text="text" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CopyBTN from "@/components/CopyToClipboardBtn.vue";
import { OwOfy } from "@/functions/OWOfy";
import {} from "@/functions/Emojify";
import {} from "@/functions/zalgo";
export default defineComponent({
  name: "text-fucker",
  components: {
    CopyBTN
  },
  setup() {
    OwOfy;
  },
  data() {
    return {
      text: "",
      WarCrimeCommited: false
    };
  },
  methods: {
    Convert() {
      this.text = OwOfy(this.text);
    }
  }
});
</script>