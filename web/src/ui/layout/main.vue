<template>
  <v-app>
    <MainNavbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainNavbar from "@/ui/components/MainNavbar.vue";

@Component({
  components: {
    MainNavbar,
  },
})
export default class MainLayout extends Vue {
  //
}
</script>

<style>
.v-main {
  margin: auto;
  width: 100%;
  max-width: 1366px;
}
</style>
