<template>
  <v-container fluid class="fill-height">
    <v-card width="400" class="pa-4 mx-auto" color="cyan">
      <form @submit.prevent.stop="handleSubmit">
        <v-card-title>Test server</v-card-title>
        <v-divider />
        <v-card-text>
          <v-text-field
            type="text"
            v-model="name"
            solo
            hide-details
            placeholder="Enter your name"
            class="mb-2"
            clearable
            @click:clear="message = null"
          />
          <v-alert color="grey lighten-2" v-if="message"> {{ message }}</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn type="submit" color="primary" large class="px-12" :loading="loading">Send</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardPage extends Vue {
  loading = false;
  name: string = "";
  message: string | null = null;

  async handleSubmit() {
    try {
      this.loading = true;
      this.message = null;
      const resp = await this.$axios.get("/api/say/hello", {
        params: {
          name: this.name,
        },
      });
      this.message = resp.data;
    } catch (err) {
      this.message = `${err.response?.data?.message || err}`;
    } finally {
      this.loading = false;
    }
  }
}
</script>
