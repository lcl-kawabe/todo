import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Task from './Task';


const TodoList = (props) => {
  const { todos, onDeleteClick, onCheckBoxClick } = props;
  const row = todos.map((todo) => {
    const task = (
      <TableRow key={todo.key} >
        <TableRowColumn>
          <Checkbox
            onClick={() => onCheckBoxClick(todo)}
            checked={todo.completed}
          />
        </TableRowColumn>
        <TableRowColumn>
          <Task
            key={todo.key}
            text={todo.text}
          />
        </TableRowColumn>
        {/* <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn> */}
        <TableRowColumn>
          <FlatButton
            style={{ fontSize: 8, minWidth: 30, margin: '0 10' }}
            secondary
            onClick={() => onDeleteClick(todo.key)}
          >
            削除
          </FlatButton>
        </TableRowColumn>
      </TableRow>
    );
    return task;
  });
  return (
    <Table
      selectable={false}
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
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
      <TableBody
        displayRowCheckbox={false}
      >
        {row}
      </TableBody>
    </Table>
  );
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCheckBoxClick: PropTypes.func.isRequired,
};

export default TodoList;
