import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Task from './Task'

class TodoList extends Component{
  render(){
    const {todos, onDeleteClick, onTodoClick} = this.props;
    let list = []
    todos.map(todo => {
      list.push(
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Task
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

    let row = []
    todos.map(todo => {
      row.push(
        <TableRow>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn>
            <Task
              key={todo.key}
              text={todo.text}
              completed={todo.completed}
              onClick={() => onTodoClick(todo.key)}
            />
          </TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn>
            <FlatButton
              style={{fontSize:8,minWidth:30,margin:'0 10'}}
              secondary={true}
              onClick={() => onDeleteClick(todo.key)}>
              削除
            </FlatButton>
          </TableRowColumn>
        </TableRow>
      )
    });

    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>完了</TableHeaderColumn>
            <TableHeaderColumn>タスク</TableHeaderColumn>
            <TableHeaderColumn>プロジェクト</TableHeaderColumn>
            <TableHeaderColumn>コンテキスト</TableHeaderColumn>
            <TableHeaderColumn>開始日</TableHeaderColumn>
            <TableHeaderColumn>期限</TableHeaderColumn>
            <TableHeaderColumn>所要時間</TableHeaderColumn>
            <TableHeaderColumn>繰り返し</TableHeaderColumn>
            <TableHeaderColumn>通知</TableHeaderColumn>
            <TableHeaderColumn>タグ</TableHeaderColumn>
            <TableHeaderColumn>メモ</TableHeaderColumn>
            <TableHeaderColumn>削除</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {row}
        </TableBody>
      </Table>
    )
  }
}

TodoList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;
