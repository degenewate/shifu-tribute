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
      <button
        class="button is-danger is-rounded level-item is-hoverable"
        @click="OWO()"
      >
        uwu
      </button>
      <button
        class="button is-danger is-rounded level-item is-hoverable"
        @click="evil()"
      >
        doing ur mom
      </button>
      <CopyBTN class="level-item is-rounded" :text="text" />
      <button
        class="button is-primary is-rounded level-item is-hoverable"
        @click="text = ''"
      >
        reset
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CopyBTN from "@/components/CopyToClipboardBtn.vue";
import { OwOfy } from "@/functions/OWOfy";
import { zalgofy } from "@/functions/zalgo";
import { RandNum } from "@/functions/num-utils";
export default defineComponent({
  name: "text-fucker",
  components: {
    CopyBTN
  },
  data() {
    return {
      text: "",
      WarCrimeCommited: false
    };
  },
  methods: {
    OWO() {
      this.text = OwOfy(this.text);
    },
    evil() {
      this.text = zalgofy(this.text);
    }
  }
});
</script>