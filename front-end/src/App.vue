<template>
  <HeaderComponent />
  <main>
    <TaskList />
    <Timer />
  </main>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import TaskList from './components/TaskList.vue';
import Timer from './components/Timer.vue';

export default {
  components: {
    HeaderComponent,
    TaskList,
    Timer
  },
};
</script>
