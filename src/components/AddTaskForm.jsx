import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddTaskForm = ({ fetchTasks }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_HOSTED_ROUTE}/create-task`, {
        taskName,
        taskDescription,
        taskDate,
      });

      fetchTasks(); // Refresh the task list
      toast.success("Task Added Successfully");
      
      setTaskName("");
      setTaskDescription("");
      setTaskDate("");
    } catch (error) {
      console.error('Error adding task:', error);
      toast.error('Error adding task:', error);
    }
  };

  return (
    <div className='add-task-container'>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name :- </label>
          <input
            type="text"
            placeholder='Enter task Title'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Description :- </label>
          <input
            type="text"
            placeholder='Enter task Details'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Date :- </label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </div>
        <button className='add-task-btn' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
