<template>
  <header class="p-1 is-flex is-flex-direction-column is-align-items-center">
    <h1 class="title is-flex is-flex-direction-column is-4 has-text-centered p-4">
      Pomodoro Timer
      <img src="../assets/images/pomodoro-timer.svg" alt="Pomodoro Logo" class="mt-4">
    </h1>
  </header>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'SideBar'
  })
  </script>
  
  <style scoped>
  h1 {
    background-color: var(--background-secondary);
    border: 2px solid;
    border-radius: 20px;
    gap: 2rem;
    font-size: var(--title-font-size)
  }
  </style>