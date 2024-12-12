import { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// console.log(import.meta.env.VITE_HOSTED_ROUTE);


const App = () => {

  const [tasks, setTasks] = useState([]);

  // Function to Fetch Task
  const fetchTasks = async() => {
    try {
      const response = await axios.get(`https://backend-to-do-task-scheduler.onrender.com/api/v1/all-task-list`);
      setTasks(response.data.taskData.reverse());
    } 
    catch (error) {
      console.log("Error Fetching Tasks", error.message); 
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='container'>
      <div className="main">
        <h1>Task Scheduler</h1>
        <AddTaskForm fetchTasks={fetchTasks}/>
        <TaskList tasks={tasks} fetchTasks={fetchTasks}/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition: Bounce
        />
      </div>
    </div>
  );
};

export default App;
