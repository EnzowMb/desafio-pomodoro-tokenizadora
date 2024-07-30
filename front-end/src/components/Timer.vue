<template>
  <div>
    <h1>Pomodoro Timer</h1>
    <div>{{ formattedTime }}</div>
    <div>Total de tempo em minutos: {{ totalMinutes }}</div>
    <div>Total de Pomodoros: {{ totalPomodoros }}</div>
    <button @click="startTimer">Começar</button>
    <button @click="pauseTimer">Pausar</button>
    <button @click="finishTimer">Finalizar</button>
  </div>
</template>s

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'PomodoroTimer',

  setup() {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const totalTime = ref(0);
    const pomodoroTime = 0.25 * 60; // 15 segundos
    const shortBreakTime = 0.1 * 60; // 6 segundos
    const longBreakTime = 0.25 * 60; // 15 segundos
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

    const finishTimer = () => {
      console.log(pomodoroCount.value)

      pauseTimer();
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
      totalTime.value = 0;
      pomodoroCount.value = 0;
    };

    const totalMinutes = computed(() => {
      return (hours.value * 60 + minutes.value + seconds.value / 60).toFixed(2);
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
      totalMinutes,
      startTimer,
      pauseTimer,
      finishTimer
    };
  }
});
</script>

<style scoped>
h1 {
  font-size: 2em;
}

div {
  font-size: 1.5em;
  margin-bottom: 1em;
}

button {
  margin-right: 1em;
  padding: 0.5em 1em;
  font-size: 1em;
}
</style>
