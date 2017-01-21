import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField';

class Todo extends Component {
  constructor(props) {
    super();
    this.state = {
      task: props.text,
    };
  }

  render(){
    const submit = e => {
      e.preventDefault()
      this.props.onAddTodo(this.state.Task)
    }
    return(
      <TextField
        hintText="タスクを入力してください"
        value={this.state.task}
        onChange={e => {
          this.setState({ task: e.target.value });
        }}
        underlineShow={false}
        style={{height:"100%"}}
      />
    )
  }
}
Todo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}


// class Todo extends Component {
//   render(){
//     const {key, completed, text } = this.props;
//     return(
//       <input
//         type="text"
//         name="name"
//         value={text}
//         onChange={e => {
//           this.setState({ text: e.target.value });
//         }}
//         style={{height:"100%"}}
//       >
//       </input>
//     )
//   }
// }


export default Todo;
