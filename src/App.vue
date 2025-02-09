<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/navigation/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-primary text-primary">
    <Navbar />
    <RouterView />
  </div>
</template>
