import "./Todo.css";
import { useState } from "react";
import List from "./List";
import { FaTrash } from "react-icons/fa";
function Todo(props) {
  const [task, setTask] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [id, setId] = useState(0);

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => !(id === task.id)));
  };

  const handleDeleteAll = () => {
    setTaskList(taskList.filter((task) => !task.checked));
  };
  const addTask = (e) => {
    e.preventDefault();
    if (task === "") {
      return;
    }
    setId((prev) => prev + 1);

    setTaskList((prev) => [...prev, { name: task, id: id }]);
    setTask("");
  };

  const onToggle = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };
  console.log(props.pageName);
  return (
    <div>
      <div className="task-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {console.log(props.pageName)}
      {props.pageName === "All" &&
        taskList.map((task) => (
          <List
            task={task.name}
            key={task.id}
            id={task.id}
            checked={task.checked}
            onToggle={onToggle}
          ></List>
        ))}

      {props.pageName === "Active" &&
        taskList.map((task) =>
          !task.checked ? (
            <List
              task={task.name}
              key={task.id}
              id={task.id}
              checked={task.checked}
              onToggle={onToggle}
            ></List>
          ) : null
        )}

      {props.pageName === "Completed" &&
        taskList.map((task) =>
          task.checked ? (
            <div className="completed-container">
              <List
                task={task.name}
                key={task.id}
                id={task.id}
                checked={task.checked}
                onToggle={onToggle}
              ></List>
              <FaTrash onClick={() => handleDelete(task.id)} />
            </div>
          ) : null
        )}
      <button
        className={
          props.pageName === "Completed" ? "delete-all" : "display-none"
        }
        onClick={handleDeleteAll}
      >
        Delete all
      </button>
    </div>
  );
}

export default Todo;
