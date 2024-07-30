<template>
  <div>
    <form @submit.prevent="addTask">
      <div class="field">
        <label class="label">Descrição</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="description"
            placeholder="Descrição da tarefa"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Quantidade de Pomodoros</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="pomodoros"
            placeholder="Quantidade de Pomodoros"
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-primary">Adicionar Tarefa</button>
      </div>
    </form>
    <hr />
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Pomodoros</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.description }}</td>
          <td>{{ task.pomodoroCount }}</td>
          <td>{{ task.completed }}</td>
          <td>
            <button class="button is-small is-info" @click="startTask(task.id)">
              Iniciar
            </button>
            <button
              class="button is-small is-success"
              @click="finishTask(task.id)"
            >
              Finalizar
            </button>
            <button
              class="button is-small is-danger"
              @click="deleteTask(task.id)"
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  description: string;
  pomodoroCount: number;
  completed: boolean;
  createdAt: Date;
}

export default defineComponent({
  setup() {
    const tasks = ref<Task[]>([]);
    const description = ref("");
    const pomodoros = ref(1);

    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3000/tasks");
      tasks.value = response.data;
    };

    const addTask = async () => {
      const response = await axios.post("http://localhost:3000/tasks", {
        description: description.value,
        pomodoros: pomodoros.value,
      });
      tasks.value.push(response.data);
      description.value = "";
      pomodoros.value = 1;
    };

    const startTask = async (id: number) => {
      await axios.put(`http://localhost:3000/tasks/${id}/start`);
      fetchTasks();
    };

    const finishTask = async (id: number) => {
      await axios.put(`http://localhost:3000/tasks/${id}/finish`);
      fetchTasks();
    };

    const deleteTask = async (id: number) => {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      fetchTasks();
    };

    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,
      description,
      pomodoros,
      addTask,
      startTask,
      finishTask,
      deleteTask,
    };
  },
});
</script>

<style scoped>
/* Custom styles */
</style>
