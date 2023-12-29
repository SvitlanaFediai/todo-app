import React, { useState } from "react";
import style from "./style.module.css";
import itemStyle from "../todoItem/style.module.css";

const EditTodoForm = ({ todo, updateTodo, editTodo }) => {
  const [task, setTask] = useState(todo.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(todo.id, task);
    editTodo();
  }

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className={itemStyle.item}>
      <form className={style.editForm}
            onSubmit={handleUpdate}
      >
        <input onChange={handleChange}
                value={task}
                type="text"
        />
        <button className={style.editBtn}
                type="button"
                onClick={(e) => handleUpdate(e)}
        >Save</button>
      </form>
    </div>
  )
}

export default EditTodoForm;