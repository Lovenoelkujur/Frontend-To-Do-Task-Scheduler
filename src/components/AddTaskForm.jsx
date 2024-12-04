/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

const AddTaskForm = ({ fetchTasks }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-to-do-task-scheduler.onrender.com/api/v1/create-task', {
        taskName,
        taskDescription,
        taskDate,
      });
      fetchTasks(); // Refresh the task list
      setTaskName('');
      setTaskDescription('');
      setTaskDate('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Description:</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Date:</label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
