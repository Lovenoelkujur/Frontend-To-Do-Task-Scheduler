/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


const UpdateTaskForm = ({ task, setEditingTaskId, fetchTasks}) => {

  const [taskName, setTaskName] = useState(task.taskName);
  const [taskDescription, setTaskDescription] = useState(task.taskDescription);
  const [taskDate, setTaskDate] = useState(task.taskDate);

  // Handle Submit (Edit Task)
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await axios.put(`${import.meta.env.VITE_HOSTED_ROUTE}/update-task/${task._id}`, {
        taskName,
        taskDescription,
        taskDate,
      });

      toast.success("Task Update Successfully.");
      fetchTasks();             // Refresh Task List
      setEditingTaskId(null);     // Close the update form
    } 
    catch (error) {
      console.log("Error Update Task", error);
      toast.error("Error Update Task");
    }
  };

  return (
    <div className='update-task-container'>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Task Name :- </label>
          <input 
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Task Description :- </label>
          <input 
            type="text"
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

        <button className="update-btn" type="submit">Update Task</button>
        <button
          className="cancel-btn"
          type="button" 
          onClick={() => setEditingTaskId(null)}
        >
          Cancel
        </button>

      </form>
    </div>
  )
}

export default UpdateTaskForm;