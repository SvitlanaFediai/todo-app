import React, { useState } from "react";
import style from "./style.module.css";
import {IoIosMore as MoreIcon} from "react-icons/io";
import {IoIosClose as CloseIcon} from "react-icons/io";
import TodoMenu from "../todoMenu/todoMenu";
import { motion} from "framer-motion";
import EditTodoForm from "../todoEdit/todoEdit";

const TodoItem = ({ todo, updateTodo, deleteTodo, completeTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const editTodo = () => {
    setIsEditing(!isEditing);
  }

  const toggleMenu = () => {
    setIsOpen((curr) => !curr);
  }
  console.log(todo, isEditing);
  return (
    <motion.div className={style.wrapper}
                initial={{ opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
    >
      {isEditing 
        ?
        <EditTodoForm todo={todo} updateTodo={updateTodo} editTodo={editTodo} />
        :
        <>
          <div className={`${style.item} ${isOpen ? style.open : ''}`}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#ccc' : '#333',
          }}
          >
            <span>{todo.text}</span>
            <div className={style.actionBtn}
                onClick={toggleMenu}
            >
            {isOpen ? <CloseIcon /> : <MoreIcon />}
            </div>
          </div>
          <TodoMenu closeMenu={toggleMenu}
                    todo={todo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
          />
        </>
      }
    </motion.div>
  )
}

export default TodoItem;