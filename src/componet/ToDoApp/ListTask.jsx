import { useState } from "react";

const ListTask = ({ task, index, removeTask, doneTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    editTask(index, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="list-task">
      <div className={`task ${task.done ? "done" : ""}`}>
        {isEditing ? (
          <>
            <input
              className="input"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button className="edit-save-btn" onClick={handleEdit}>
              Save
            </button>
          </>
        ) : (
          <>
            <span>{task.title}</span>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="done-btn" onClick={() => doneTask(index)}>
              {task.done ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => {
                {
                  removeTask(index);
                }
              }}
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ListTask;
