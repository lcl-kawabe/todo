import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  underlineStyle: {
    borderColor: 'transparent',
  },
};

class Todo extends Component {
  constructor(props) {
    super();
    this.state = {
      task: props.todo.text,
    };
    const temp = props.todo;
    temp.order = props.order;// あとで削除
    props.onUpdate(temp);
  }

  render() {
    const { todo, onUpdate, onAddTodo } = this.props;
    const update = (e) => {
      e.preventDefault();
      const temp = todo;

      temp.text = e.target.value;
      onUpdate(temp);
    };
    return (
      <TextField
        hintText="タスクを入力してください"
        value={this.state.task}
        onChange={(e) => {
          this.setState({ task: e.target.value });
          update(e);
        }}
        underlineStyle={styles.underlineStyle}
        fullWidth
        onKeyDown={(e) => {
          const ENTER_KEY = 13;
          if (e.keyCode === ENTER_KEY) {
            const addTodo = {
              text: '',
              id: this.props.order + 1,
            };
            onAddTodo(addTodo);
          }
        }}
      />
    );
  }
}
Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  order: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default Todo;
