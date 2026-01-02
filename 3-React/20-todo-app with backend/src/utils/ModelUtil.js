export const todoItemToClientModel = (serverItem) => {
  return {
    id: serverItem.id,
    todoText: serverItem.task,
    todoDate: serverItem.date
  }
}