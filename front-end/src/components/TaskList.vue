<template>
  <div class="box">
    <form @submit.prevent="submitForm" class="rows">
      <h1 class="field column">{{ isEditing ? 'Atualizar Tarefa' : 'Criar Tarefa' }}</h1>
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
        <button class="button is-light">
          <span>{{ isEditing ? 'Atualizar Tarefa' : 'Adicionar Tarefa' }}</span>
        </button>
        <button 
          v-if="isEditing" 
          type="button" 
          class="button is-light ml-2" 
          @click="resetForm"
        >
          Cancelar
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
          <td v-html="wrapText(task.description, 30)"></td>
          <td>{{ task.pomodoroCount }}</td>
          <td>
            <h1>{{ task.completed ? 'Finalizada' : 'Não finalizada' }}</h1>
          </td>
          <td class="has-text-centered" >
            <span class="subtitle is-4" v-if="task.completed">
              {{ formatTime(task.totalTime) }} <i class="fa-regular fa-clock"></i>
            </span>
            <Timer v-else :taskId="task.id" :onTaskFinished="loadTasks" />
          </td>
          <td class="buttons">
            <button
              class="button is-small is-link mt-3"
              @click="editTask(task)"
            >
              <span class="icon">
                <i class="fa-solid fa-pencil"></i>
              </span>
              <span>Editar</span>
            </button>
            <button
              class="button is-small is-danger mt-3"
              @click="handleDeleteTask(task.id)"
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
import { fetchTasks, addTask, updateTask, deleteTask } from '../service/taskService.ts';
import type { Task } from '../types/task.ts';

export default defineComponent({
  components: {
    Timer,
  },
  setup() {
    const tasks = ref<Task[]>([]);
    const description = ref("");
    const title = ref("");
    const isEditing = ref(false);
    const taskToEdit = ref<Task | null>(null);

    const loadTasks = async () => {
      try {
        tasks.value = await fetchTasks();
      } catch (error) {
        alert(error.message);
      }
    };

    const handleAddTask = async () => {
      const currentDate = new Date().toISOString();
      const task = {
        title: title.value,
        description: description.value,
        completed: false,
        createdAt: currentDate,
        pomodoroCount: 0,
      };

      try {
        await addTask(task);
        await loadTasks();
        resetForm();
      } catch (error) {
        alert(error.message);
      }
    };

    const handleUpdateTask = async (id: number | undefined) => {
      if (id === undefined) return;

      const updatedTask = {
        ...taskToEdit.value,
        title: title.value,
        description: description.value,
      };

      try {
        await updateTask(id, updatedTask);
        await loadTasks();
        resetForm();
      } catch (error) {
        alert(error.message);
      }
    };

    const handleDeleteTask = async (id: number) => {
      try {
        await deleteTask(id);
        await loadTasks();
      } catch (error) {
        alert(error.message);
      }
    };

    const editTask = (task: Task) => {
      isEditing.value = true;
      taskToEdit.value = task;
      title.value = task.title;
      description.value = task.description;
    };

    const resetForm = () => {
      isEditing.value = false;
      taskToEdit.value = null;
      title.value = "";
      description.value = "";
    };

    const submitForm = () => {
      if (isEditing.value && taskToEdit.value) {
        handleUpdateTask(taskToEdit.value.id);
      } else {
        handleAddTask();
      }
    };

    const wrapText = (text: string, maxLength: number): string => {
      const regex = new RegExp(`.{1,${maxLength}}`, 'g');
      return text.match(regex)?.join('<br>') || text;
    };

    onMounted(() => {
      loadTasks();
    });

    function formatTime(seconds: number): string {
      const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      return `${hours}:${minutes}:${secs}`;
    }

    return {
      tasks,
      title,
      description,
      isEditing,
      taskToEdit,
      formatTime,
      handleAddTask,
      handleUpdateTask,
      handleDeleteTask,
      editTask,
      resetForm,
      submitForm,
      loadTasks,
      wrapText,
    };
  },
});
</script>
