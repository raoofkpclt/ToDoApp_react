import React, { useEffect, useState } from "react";
import "./ToDo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.done).length;
  const doneTasks = tasks.filter((task) => task.done).length;

  useEffect(() => {
    const pending = tasks.filter((task) => !task.done).length;
    document.title = `You have ${pending} pending task(s)`;
  }, [tasks]);

  const addTask = (title) => {
    const newTask = [...tasks, { title, done: false }];
    setTasks(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  const doneTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };
  const editTask = (index, newTitle) => {
    const newTasks = [...tasks];
    newTasks[index].title = newTitle;
    setTasks(newTasks);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="pending">
          <p>Total: {totalTasks}</p>
          <p>Pending: {pendingTasks}</p>
          <p>Done: {doneTasks}</p>
        </div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {[...tasks]
            .map((task, originalIndex) => ({ task, originalIndex }))
            .sort((a, b) => a.task.done - b.task.done)
            .map(({ task, originalIndex }) => (
              <ListTask
                task={task}
                index={originalIndex} // now index matches original state
                key={originalIndex}
                removeTask={removeTask}
                doneTask={doneTask}
                editTask={editTask}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default ToDo;
