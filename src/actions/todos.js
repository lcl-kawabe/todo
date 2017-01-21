import { firebaseDb } from '../firebase/';
const ref = firebaseDb.ref('todos');

// Subscribe
function loadTodos() {
  return dispatch => {
    ref.off()
    // valueを購読する。todosに変更があれば、以下の処理が実行される。
    ref.on('value',
      (snapshot) => {dispatch(loadTodosSuccess(snapshot))},
      (error) => {dispatch(loadTodosError(error))}
    )
  }
}

function loadTodosSuccess(snapshot){
  return {
    type: 'TODOS_RECEIVE_DATA',
    data: snapshot.val()
  }
}

function loadTodosError(error){
  return {
    type: 'TODOS_RECIVE_ERROR',
    message: error.message
  }
}

// CREATE_TASK
function addTodo(text){
  return dispatch => {
    ref.push({
      text: text,
      completed: false,
    })
      .catch(error => dispatch({
        type: 'ADD_TASK_ERROR',
        message: error.message,
      }));
  }
}

// UPDATE_TASK
function updateTodo(todo){
  return (dispatch, getState) => {
    let state = getState()

    // パスのオブジェクトをアップデートします。
    // updateにはオブジェクトを渡すと差分を自動で更新してくれます。
    firebaseDb.ref(`todos/${todo.key}`)
    .update({
      text: todo.text,
      completed: todo.completed,
    })
    .catch(error => dispatch({
      type: 'UPDATE_TASK_ERROR',
      message: error.message,
    }));
  }
}

// DELETE_TASK
function deleteTodo(key){
  return dispatch => {
    // パスのオブジェクトを削除します。
    firebaseDb.ref(`todos/${key}`).remove()
      .catch(error => dispatch({
        type: 'DELETE_TASK_ERROR',
        message: error.message,
      }));
  }
}

module.exports = {
  loadTodos,
  addTodo,
  updateTodo,
  deleteTodo,
}
