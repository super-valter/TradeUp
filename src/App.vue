<template>
  <main>
    <div class="container">
      <the-header />
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
</script>
