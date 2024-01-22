<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/images/tradeup.png" width="300" height="93" />
    <div class="wrapper">
      <theme-button />
    </div>
  </header>
</template>

<script setup>
import ThemeButton from '@/components/ThemeButton/ThemeButton.vue'
</script>

<style lang="css" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

@media (max-width: 576px) {
  header {
    display: block;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
