<template>
  <div class="server">
    <h1>Get hello from server</h1>
    <form @submit.prevent.stop="handleSubmit">
      <input type="text" v-model="name" />
      <input type="submit" />
    </form>
    <div style="padding: 20px">
      {{ response }}
    </div>
  </div>
</template>
