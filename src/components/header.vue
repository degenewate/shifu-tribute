<template>
  <div>
    <nav
      v-show="showNavbar"
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="https://listimg.pinclipart.com/picdir/s/359-3591702_splashing-sweat-sweat-drops-emoji-transparent-clipart.png"
            alt=""
          />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': MobileToggle }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="ToggleNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': MobileToggle }">
        <div class="navbar-start">
          <a  class="navbar-item" @click="thighs"> thighs </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Moreee</a>
            <div class="navbar-dropdown">
              <a
                class="navbar-item"
                @click="ToggleNav"
                href="https://www.youtube.com/watch?v=iWpCdUQLWwU"
              >
                cumwade
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="die"> die. </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a
              class="button is-info"
              href="https://www.youtube.com/watch?v=7Do70nztRNE"
            >
              Pray
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Swal from "sweetalert2";
export default defineComponent({
  data() {
    return {
      MobileToggle: false,
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  methods: {
    ToggleNav() {
      this.MobileToggle = !this.MobileToggle;
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      //  determine whether to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    die() {
      Swal.fire({
        title: "no.",
        confirmButtonText: `understandable`,
        showCancelButton: true,
        cancelButtonText: "no fuck u"
      }).then(result => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDismissed) {
          Swal.fire({
            title: "rude.",
            icon: "error"
          });
        } else if (result.isConfirmed) {
          Swal.fire({
            title: "pog.",
            icon: "success"
          });
        }
      });
    },
    thighs(){
      Swal.fire({
        title: " ok i get it ur horny",
        text: "now go back to the cumdump smh"
      })
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
});
</script>

<style scoped>
</style>