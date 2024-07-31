<template>
  <div class="box">
    <form @submit.prevent="addTask" class="rows">
      <h1 class="field column">Criar Tarefa</h1>
      <div class="field column is-7">
        <label class="label">Titulo</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="title"
            placeholder="Titulo da tarefa"
          />
        </div>
      </div>
      <div class="field column is-7">
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
      <div class="control column is-8">
        <button class="button">
          <span>Adicionar Tarefa</span> 
          <span class="icon">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </form>
    <hr />
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descrição</th>
          <th>Pomodoros</th>
          <th>Status</th>
          <th>Timer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.pomodoroCount }}</td>
          <td>
            <h1>{{ task.completed ? 'Finalizada' : 'Não finalizada' }}</h1>
            <button
              class="button is-small is-danger"
              @click="deleteTask(task.id)"
            >
              Remover
            </button>
          </td>
          <td>
            <Timer :taskId="task.id" :onTaskFinished="fetchTasks" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Timer from './Timer.vue';
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
  components: {
    Timer,
  },
  setup() {
    const tasks = ref<Task[]>([]);
    const description = ref("");
    const title = ref("");

    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3000/tasks");
      console.log(response.data);
      tasks.value = response.data;
    };

    const addTask = async () => {
      const currentDate = new Date().toISOString();
      const task = {
        title: title.value,
        description: description.value,
        completed: false,
        createdAt: currentDate,
        pomodoroCount: 0,
      }

      await axios.post("http://localhost:3000/tasks", task);
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
      title,
      description,
      addTask,
      deleteTask,
      fetchTasks,
    };
  },
});
</script>
