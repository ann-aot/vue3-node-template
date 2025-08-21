<template>
  <section>
    <h2>{{ msg }}</h2>
    <button class="btn" @click="count++">Count: {{ count }}</button>
    <p v-if="apiMessage">API: {{ apiMessage }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const apiMessage = ref('');

onMounted(async () => {
  try {
    const res = await fetch(`/api/health`);
    if (res.ok) {
      const data = await res.json();
      apiMessage.value = data.status;
    }
  } catch (error) {
    // Fallback silently, but ensure non-empty catch for lint rules
    console.error('Failed to fetch health', error);
  }
});
</script>

<style scoped></style>
