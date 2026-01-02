import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";
import {useContext} from "react";

const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
      ))}
    </>
  );
};

export default TodoItems;
