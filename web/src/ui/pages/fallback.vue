<template>
  <ErrorContainer
    :code="errorCode"
    :message="errorMessage"
    :details="errorDetails"
    :redirect="redirectTo"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ErrorContainer from "@/ui/components/ErrorContainer.vue";

@Component({
  components: {
    ErrorContainer,
  },
})
export default class FallbackPage extends Vue {
  get errorCode(): string | null {
    const q = this.$route.query.code;
    return typeof q === "object" ? q[0] : q;
  }

  get errorMessage(): string | null {
    const q = this.$route.query.message;
    return typeof q === "object" ? q[0] : q;
  }

  get redirectTo(): string | null {
    const q = this.$route.query.redirect;
    return typeof q === "object" ? q[0] : q;
  }

  get errorDetails(): string | null {
    const q = this.$route.query.details;
    return typeof q === "object" ? q[0] : q;
  }
}
</script>
