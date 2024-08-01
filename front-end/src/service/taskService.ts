import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar as tarefas: ' + error);
  }
};

export const addTask = async (task: any) => {
  try {
    await axios.post(API_URL, task);
  } catch (error) {
    throw new Error('Erro ao adicionar tarefa: ' + error);
  }
};

export const updateTask = async (id: number, updatedTask: any) => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedTask);
  } catch (error) {
    throw new Error('Erro ao atualizar tarefa: ' + error);
  }
};

export const deleteTask = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Erro ao deletar tarefa: ' + error);
  }
};

export const updateTaskPomodoro = async (taskId: number, pomodoroData: any) => {
  try {
    await axios.put(`${API_URL}/${taskId}`, pomodoroData);
  } catch (error) {
    throw new Error('Erro ao finalizar tarefa: ' + error);
  }
};
