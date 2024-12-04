import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://backend-to-do-task-scheduler.onrender.com/api/v1/all-task-list');
      setTasks(response.data.taskData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.taskName}</h3>
            <p>{task.taskDescription}</p>
            <p>Date: {task.taskDate}</p>
            <p>Status: {task.isCompleted ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
