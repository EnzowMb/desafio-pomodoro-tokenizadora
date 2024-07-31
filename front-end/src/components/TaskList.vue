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
            required
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
          <th>Pomodoros usados</th>
          <th>Status</th>
          <th class="has-text-centered">Timer</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td v-html="wrapText(task.title, 20)"></td>
          <td v-html="wrapText(task.description, 20)"></td>
          <td>{{ task.pomodoroCount }}</td>
          <td>
            <h1>{{ task.completed ? 'Finalizada' : 'Não finalizada' }}</h1>
          </td>
          <td>
            <Timer :taskId="task.id" :onTaskFinished="fetchTasks" />
          </td>
          <td class="has-text-centered">
            <button
              class="button is-small is-danger mt-3"
              @click="deleteTask(task.id)"
            >
              <span class="icon">
                <i class="fa-solid fa-trash"></i>
              </span>
              <span>Remover</span>
            </button>
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
      };

      await axios.post("http://localhost:3000/tasks", task);
      fetchTasks();
    };

    const deleteTask = async (id: number) => {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      fetchTasks();
    };

    const wrapText = (text: string, maxLength: number): string => {
      const regex = new RegExp(`.{1,${maxLength}}`, 'g');
      return text.match(regex)?.join('<br>') || text;
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
      wrapText,
    };
  },
});
</script>