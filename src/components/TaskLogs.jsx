import { useState, useEffect } from 'react';

const TaskLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Assuming there is an endpoint for fetching task logs
    // For this example, we'll mock the logs
    setLogs([
      { taskName: 'Task 1', status: 'Executed', time: '2024-12-04 18:30' },
      { taskName: 'Task 2', status: 'Failed', time: '2024-12-04 18:30' },
    ]);
  }, []);

  return (
    <div>
      <h2>Task Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.taskName}</strong> - {log.status} at {log.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskLogs;
