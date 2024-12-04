import axios from "axios";

const API_BASE_URL = "https://backend-to-do-task-scheduler.onrender.com/api/v1";

export const fetchTasks = () => axios.get(`${API_BASE_URL}/all-task-list`);
export const createTask = (taskData) => axios.post(`${API_BASE_URL}/create-task`, taskData);
export const updateTask = (id, taskData) => axios.put(`${API_BASE_URL}/update-task/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/delete-task/${id}`);
