import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, deleteTodoItem}) => {

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} deleteTodoItem={deleteTodoItem}/>
      ))}
    </>
  );
};

export default TodoItems;
