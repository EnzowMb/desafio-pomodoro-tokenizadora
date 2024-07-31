<template>
    <header>
        <h1>
            Pomodoro timer
          <img src="../assets/images/pomodoro-timer.svg" alt="Pomodoro Logo">  
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
  header {
    padding: 1rem;
    background: var(--background-primary);
    width: 100%;
    height: 100%;
  }
  h1 {
    background-color: var(--background-secondary);
    padding: 1.8rem;
    border: solid 2px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    font-size: var(--title-font-size)
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
  </style>