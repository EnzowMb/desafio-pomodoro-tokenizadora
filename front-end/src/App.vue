<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <TaskList />
    </div>
  </main>
</template>

<script>
import SideBar from './components/SideBar.vue'
import TaskList from './components/TaskList.vue';

export default {
  components: {
    SideBar,
    TaskList,
  },
};
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
}

.columns {
  height: 100%;
  background: var(--background-primary);
}

.column {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
