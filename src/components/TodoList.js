import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton';
import Todo from './Todo'

class TodoList extends Component{
  render(){
    const {todos, onDeleteClick, onTodoClick} = this.props;
    let list = []
    todos.map(todo => {
      list.push(
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Todo
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onClick={() => onTodoClick(todo.key)}
          />
          <FlatButton
            style={{fontSize:8,minWidth:30,margin:'0 10'}}
            secondary={true}
            onClick={() => onDeleteClick(todo.key)}>
            削除
          </FlatButton>
        </div>
      )
    });
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;
