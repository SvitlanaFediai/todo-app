import { useState } from "react";
import style from "./style.module.css";
import {IoIosAdd as AddIcon} from "react-icons/io";
import { motion } from "framer-motion";
import { variants } from "../../helpers/variants";
import toast from "react-hot-toast";

const TodoInput = ({ addNewTodo }) => {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      toast.error('Please enter something');
      return;
    } 

    addNewTodo(text);
    setText('');
    setIsOpen(false);
  }

  return (
    <div className={style.container}>
      <motion.form initial={false}
                  animate={isOpen ? 'open' : 'close'}
                  variants={variants}
                  className={`${style.form} ${isOpen ? style.open : ''}`}
                  onSubmit={handleAddTodo}>
        <input type="text" 
              placeholder="Add new todo"
              value={text}
              onChange={(e) => setText(e.target.value)}/>
      </motion.form>
      <button className={style.addBtn}
              onClick={(e) => (isOpen ? handleAddTodo(e) : setIsOpen(true))}>
              {isOpen ? 'Add' : <AddIcon size={30}/>}
      </button>
    </div>
  )
};

export default TodoInput;