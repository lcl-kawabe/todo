import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  underlineStyle: {
    borderColor: '#fff',
  },
};

class Todo extends Component {
  constructor(props) {
    super();
    this.state = {
      task: props.todo.text,
    };
  }

  render() {
    const { todo, onUpdate } = this.props;
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
      />
    );
  }
}
Todo.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
