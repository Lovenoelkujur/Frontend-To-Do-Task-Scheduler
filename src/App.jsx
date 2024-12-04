
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import TaskLogs from './components/TaskLogs';

const App = () => {
  return (
    <div className='container'>
      <div className="main">
        <h1>Task Scheduler</h1>
        <AddTaskForm />
        <TaskList />
        <TaskLogs />
      </div>
    </div>
  );
};

export default App;
