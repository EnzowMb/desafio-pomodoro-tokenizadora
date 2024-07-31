<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
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
