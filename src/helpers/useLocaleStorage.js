import { useEffect, useState } from "react";

export default function useLocaleStorage(initialValue) {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || initialValue
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos];
}
