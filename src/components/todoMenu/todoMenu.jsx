import style from "./style.module.css";
import {IoMdCheckmark as CheckIcon} from "react-icons/io";
import {IoIosTrash as DeleteIcon} from "react-icons/io";
import { IoMdCreate as EditIcon} from "react-icons/io";

const TodoMenu = ({closeMenu, todo, editTodo, deleteTodo, completeTodo}) => {
  const handleCompleteTodo = () => {
    completeTodo(todo.id);
    setTimeout(() => {
      closeMenu()
    }, 300)
  };

  const handleEditTodo = () => {
    editTodo(todo.id);
    setTimeout(() => {
      closeMenu()
    }, 300)
  };

  return (
    <div className={style.menu}>
      <div className={`${style.btn} ${style.editBtn}`}
            onClick={handleEditTodo}
      >
        <EditIcon />
      </div>
      <div className={`${style.btn} ${style.completeBtn} ${todo.completed ? style.completed : ''}`}
          onClick={handleCompleteTodo}
      >
        <CheckIcon />
      </div>
      <div className={`${style.btn} ${style.deleteBtn}`}
            onClick={() => deleteTodo(todo.id)}
      >
        <DeleteIcon />
      </div>
    </div>
  )
}

export default TodoMenu;