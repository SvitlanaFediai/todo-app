import React from "react";
import style from "./style.module.css";
import TodoItem from "../todoItem/todoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ todos, updateTodo, deleteTodo, completeTodo }) => {
  console.log(todos);
  return (
    <motion.div className={style.todoList}>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default TodoList;