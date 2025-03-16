import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newTask }),
    });
    const task = await res.json();
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

