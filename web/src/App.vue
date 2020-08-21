<template>
  <main-layout v-if="layout === 'main'" />
  <simple-layout v-else-if="layout === 'simple'" />
  <error-layout v-else />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainLayout from "@/ui/layout/main.vue";
import SimpleLayout from "@/ui/layout/simple.vue";
import ErrorLayout from "@/ui/layout/error.vue";

@Component({
  components: {
    MainLayout,
    SimpleLayout,
    ErrorLayout,
  },
})
export default class App extends Vue {
  get layout(): string {
    return (this.$route.name || "").split(".")[0];
  }
}
</script>
