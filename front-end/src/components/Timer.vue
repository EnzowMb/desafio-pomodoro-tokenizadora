<template>
  <div class="section">
    <div class="container has-text-centered">
      <div class="title is-4">{{ formattedTime }} <i class="fa-regular fa-clock"></i></div>
      <div class="subtitle is-6 mt-4">
        Total de Pomodoros: {{ totalPomodoros }} 
      </div>
      <div class="buttons are-medium is-centered">
        <button class="button is-primary" @click="startTimer">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
          <span>Começar</span>
        </button>
        <button class="button is-warning" @click="pauseTimer">
          <span class="icon">
            <i class="fa-solid fa-pause"></i>
          </span>
          <span>Pausar</span>
        </button>
        <button class="button is-danger" @click="finishTimer">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
          <span>Finalizar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, type PropType } from 'vue';
import { updateTaskPomodoro } from '../service/taskService.ts';

export default defineComponent({
  name: 'PomodoroTimer',
  props: {
    taskId: {
      type: Number as PropType<number>,
      required: true,
    },
    onTaskFinished: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },

  setup(props) {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const totalTime = ref(0);
    const pomodoroTime = 25 * 60;
    const shortBreakTime = 5 * 60;
    const longBreakTime = 15 * 60;
    let pomodoroCount = ref(0);
    let interval: number | undefined;

    const formattedTime = computed(() => {
      const pad = (num: number) => String(num).padStart(2, '0');
      return `${pad(hours.value)}:${pad(minutes.value)}:${pad(seconds.value)}`;
    });

    const totalPomodoros = computed(() => {
      return pomodoroCount.value;
    });

    const startTimer = () => {
      if (interval) return;

      interval = setInterval(() => {
        seconds.value++;
        totalTime.value++;
        if (seconds.value === 60) {
          seconds.value = 0;
          minutes.value++;
        }
        if (minutes.value === 60) {
          minutes.value = 0;
          hours.value++;
        }
        calculatePomodoros();
      }, 1000);
    };

    const pauseTimer = () => {
      if (interval) {
        clearInterval(interval);
        interval = undefined;
      }
    };

    const finishTimer = async () => {
      try {
        await updateTaskPomodoro(props.taskId, {
          pomodoroCount: pomodoroCount.value,
          completed: true,
          totalTime: totalSeconds.value,
        });
      } catch (error) {
        alert(error.message);
      }

      pauseTimer();
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
      totalTime.value = 0;
      pomodoroCount.value = 0;

      props.onTaskFinished();
    };

    const totalSeconds = computed(() => {
      return (hours.value * 3600 + minutes.value * 60 + seconds.value);
    });

    const calculatePomodoros = () => {
      let time = totalTime.value;
      let pomodoros = 0;
      
      while (time >= pomodoroTime) {
        time -= pomodoroTime;
        pomodoros++;

        if (pomodoros % 3 === 0) {
          time -= longBreakTime;
        } else {
          time -= shortBreakTime;
        }
      }
      
      pomodoroCount.value = pomodoros;
    };

    return {
      hours,
      minutes,
      seconds,
      formattedTime,
      totalPomodoros,
      totalSeconds,
      startTimer,
      pauseTimer,
      finishTimer,
    };
  }
});
</script>

<style scoped>
span {
  padding: 3px;
}

div {
  font-size: 1em;
}

button {
  margin-right: 1em;
  padding: 0.5em 1em;
  font-size: 0.9em;
}
</style>
