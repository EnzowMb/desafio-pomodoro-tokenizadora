<template>
  <HeaderComponent />
  <main>
    <TaskList />
  </main>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    HeaderComponent,
    TaskList
  },
};
</script>
