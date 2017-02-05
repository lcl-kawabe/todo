import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    const submit = (e) => {
      e.preventDefault();
      if (!this.state.input.trim()) {
        return;
      }
      this.props.onAddTodo(this.state.input);
      this.setState({ input: '' });
    };
    return (
      <div>
        <form>
          <TextField
            hintText="タスクを入力してください"
            value={this.state.input}
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
          />
          <RaisedButton
            onClick={submit}
            primary
            label="追加"
          />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
