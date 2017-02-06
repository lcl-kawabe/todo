import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

import {
  loadTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from '../actions';

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadTodos());
  }

  addTodo(todo) {
    const { dispatch } = this.props;
    dispatch(addTodo(todo));
  }

  deleteTodo(key) {
    const { dispatch } = this.props;
    dispatch(deleteTodo(key));
  }

  toggleTodo(todo) {
    const { dispatch } = this.props;
    const temp = todo;
    temp.completed = !todo.completed;
    dispatch(updateTodo(temp));
  }

  updateTodo(todo) {
    const { dispatch } = this.props;
    dispatch(updateTodo(todo));
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <div>タスク管理</div>
        <AddTodo onAddTodo={this.addTodo} />
        <TodoList
          todos={todos}
          onDeleteClick={this.deleteTodo}
          onCheckBoxClick={this.toggleTodo}
          onUpdate={this.updateTodo}
          onAddTodo={this.addTodo}
        />
      </div>
    );
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => (
  {
    todos: state.todos ? state.todos : [],
  }
);

export default connect(
  mapStateToProps,
)(App);
