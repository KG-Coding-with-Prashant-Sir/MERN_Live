const TodoItemsReducer = (currentItems, action) => {
  switch(action.type) {
    case 'ADD_ITEM': {
      const todoText = action.payload.todoText;
      const todoDate = action.payload.todoDate;
      return [...currentItems, { id: todoText, todoText, todoDate }];
    }
    case 'DELETE_ITEM':
      return currentItems.filter(item => item.id !== action.payload.todoId);
    default:
      return currentItems;  
  }
}

export default TodoItemsReducer;