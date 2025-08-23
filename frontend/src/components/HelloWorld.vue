<template>
  <section>
    <h2>{{ msg }}</h2>
    <button class="btn" @click="count++">Count: {{ count }}</button>
    <p v-if="apiMessage">API: {{ apiMessage }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getHealth } from '../services/api';

defineProps<{ msg: string }>();
const count = ref(0);
const apiMessage = ref('');

onMounted(async () => {
  try {
    const data = await getHealth();
    apiMessage.value = data.status;
  } catch (error) {
    console.error('Failed to fetch health', error);
  }
});
</script>

<style scoped></style>
