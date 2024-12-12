
/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import UpdateTaskForm from "./UpdateTaskForm";


const TaskList = ({ tasks, fetchTasks }) => {

  const [editingTaskId, setEditingTaskId] = useState(null);

  // Handle Mark as Complete / Incomplete
  const handleMarkComplete = async(taskId, isCompleted) => {
    try {
      await axios.put(`${import.meta.env.VITE_HOSTED_ROUTE}/update-task/${taskId}`, {
        isCompleted,
      });
      toast.success(`Task Marked as ${isCompleted ? "Complete" : "Incomplete"}`);
      fetchTasks();
    } 
    catch (error) {
      console.log("Error Updated Task Status", error);
      toast.error("Error Updated Task Status");
    }
  }

  // Handle Update (Edit Task)
  const handleUpdate = (taskId) => {
    setEditingTaskId((prevId) => (prevId === taskId ? null : taskId));
  }

  // Handle Delete (Delete Task)
  const handleDelete = async(taskId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_HOSTED_ROUTE}/delete-task/${taskId}`);
      toast.success("Task Deleted Successfully.");
      fetchTasks();
    } 
    catch (error) {
      console.log("Error Deleting Task", error);
      toast.error("Error Deleting Task");
    }
  };

  return (
    <div className='task-list-container'>
      <h2>Task List</h2>
      <ul>
        <li className="banner">
          <h3>Title</h3>
          <h3 className="banner-description">Description</h3>
          <h3>Date</h3>
          <h3>Status</h3>
          <h3>Edit</h3>
          <h3>Delete</h3>
          

        </li>

        {tasks.map((task) => (
          <li key={task._id}>

            <div>
              <input 
                type="checkbox" 
                checked={task.isCompleted}
                onChange={(e) => handleMarkComplete(task._id, e.target.checked)}
              />
            </div>

            <div 
              // className='task task-title'
              className={`task task-title ${task.isCompleted ? "completed" : ""}`}
              style={{
                textDecoration : task.isCompleted ? "line-through" : "none", 
              }}
            >
              <h3>{task.taskName}</h3>
            </div>

            <div 
              // className='task task-description'
              className={`task task-description ${task.isCompleted ? "completed" : ""}`}
              style={{
                textDecoration : task.isCompleted ? "line-through" : "none", 
              }}
            >
              <p>{task.taskDescription}</p>
            </div>

            <div className='task task-date'>
              <p>{task.taskDate}</p>
            </div>

            <div className='task task-status'>
              <p>
                {task.isCompleted ? 
                    <img className="check" src="../src/assets/check.png" alt="completed" /> 
                  :
                    'Pending...'}
              </p>
            </div>

            <div className="task-update">
              <button onClick={() => handleUpdate(task._id)}>
                <img src="../src/assets/edit.png" alt="Edit" />
              </button>
            </div>

            <div className="task-delete">
              <button onClick={() => handleDelete(task._id)}>
                <img src="../src/assets/delete.png" alt="delete" />
              </button>
            </div>

            {/* Conditionally render the edit form below the current task */}
            {
              editingTaskId === task._id && (
                  <UpdateTaskForm 
                    task={task}
                    setEditingTaskId={setEditingTaskId}
                    fetchTasks={fetchTasks}
                  />  
              )
            }

          </li>
        ))}
      </ul>

    </div>
  );
};

export default TaskList;
