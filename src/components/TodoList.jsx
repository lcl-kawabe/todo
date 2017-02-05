import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Task from './Task';

const styles = {
  completedHeaderRowStyle: {
    width: 30,
  },
  completedRowStyle: {
    width: 30,
  },
  taskHeaderRowStyle: {
    // width: 500,
  },
  taskRowStyle: {
    // width: 500,
  },
  deleteHeaderRowStyle: {
    width: 88,
    textAlign: 'center',
  },
  deleteRowStyle: {
    width: 88,
  },
};


const TodoList = (props) => {
  const { todos, onDeleteClick, onCheckBoxClick, onUpdate } = props;
  const row = todos.map((todo) => {
    const task = (
      <TableRow key={todo.key} >
        <TableRowColumn style={styles.completedRowStyle}>
          <Checkbox
            onClick={() => onCheckBoxClick(todo)}
            checked={todo.completed}
          />
        </TableRowColumn>
        <TableRowColumn style={styles.taskRowStyle}>
          <Task
            key={todo.key}
            todo={todo}
            onUpdate={onUpdate}
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
        <TableRowColumn style={styles.deleteRowStyle}>
          <FlatButton
            style={{ fontSize: 8, width: 30, margin: '0 10' }}
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
          <TableHeaderColumn style={styles.completedHeaderRowStyle}>完了</TableHeaderColumn>
          <TableHeaderColumn style={styles.taskHeaderRowStyle}>タスク</TableHeaderColumn>
          {/* <TableHeaderColumn>プロジェクト</TableHeaderColumn>
          <TableHeaderColumn>コンテキスト</TableHeaderColumn>
          <TableHeaderColumn>開始日</TableHeaderColumn>
          <TableHeaderColumn>期限</TableHeaderColumn>
          <TableHeaderColumn>所要時間</TableHeaderColumn>
          <TableHeaderColumn>繰り返し</TableHeaderColumn>
          <TableHeaderColumn>通知</TableHeaderColumn>
          <TableHeaderColumn>タグ</TableHeaderColumn>
          <TableHeaderColumn>メモ</TableHeaderColumn> */}
          <TableHeaderColumn style={styles.deleteHeaderRowStyle}>削除</TableHeaderColumn>
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
  onUpdate: PropTypes.func.isRequired,
};

export default TodoList;
