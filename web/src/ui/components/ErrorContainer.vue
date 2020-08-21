<template>
  <v-container id="error-container" fluid center>
    <v-card class="pa-3">
      <v-card-title>
        <v-icon size="40" color="red" class="mr-2">mdi-alert</v-icon>
        Error {{ code }}
      </v-card-title>

      <v-divider />

      <v-card-text>
        <div class="mb-2">{{ message }}</div>
        <pre>{{ details || "We know nothing more" }}</pre>
      </v-card-text>

      <v-divider />

      <v-card-actions class="px-4">
        <v-spacer />
        <v-btn large :to="redirect || '/'" dark color="blue-grey" class="px-6">
          <v-icon class="mr-2">mdi-arrow-left</v-icon>
          <span>Go Back</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ErrorContainer extends Vue {
  @Prop() code!: string;
  @Prop() message!: string;
  @Prop() details!: string;
  @Prop() redirect!: string;
}
</script>

<style lang="scss">
#error-container {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: #ff8a80;

  .v-card {
    width: 100%;
    max-width: 500px;
    background-color: #f5f5f5e5;
  }

  .v-card__title {
    color: #d32f2f;
    font-size: 2rem;
    font-weight: 300;
    padding: 10px 15px;
  }

  .v-card__text {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
  }

  pre {
    background: #ffe7ea;
    color: #555;
    font-size: 13px;
    font-weight: 500;
    font-family: monospace;
    white-space: pre-wrap;

    padding: 10px;
    max-height: 100px;
    min-height: 110px;
    overflow: auto scroll;
    border-radius: 3px;
    border: 1px solid #ef9a9a;
  }
}
</style>
