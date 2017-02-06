
function todos(state = [], action) {
  switch (action.type) {
    case 'TODOS_RECEIVE_DATA': {
      const todoList = [];
      if (action.data) {
        Object.keys(action.data).forEach((key) => {
          const todo = action.data[key];
          todoList.push({
            key,
            order: todo.order,
            text: todo.text,
            completed: todo.completed,
          });
        });
      }
      return [...todoList];
    }
    case 'TODOS_RECIVE_ERROR':
    case 'ADD_TASK_ERROR':
    case 'UPDATE_TASK_ERROR':
    case 'DELETE_TASK_ERROR':
      alert(action.message);
      return state;

    default:
      return state;
  }
}

export default todos;
