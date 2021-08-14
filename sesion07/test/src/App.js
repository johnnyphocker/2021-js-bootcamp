import React from 'react';
import data from './data';

class Box extends React.Component {

  // componentWillUnmount() {
  //   console.log('La caja se va a desmontar');
  // }

  render() {
    return <div style={{width: 50, height: 50, backgroundColor: 'red'}} ></div>
  }
}

class List extends React.Component {
  
  render() {
    return <p>{ this.props.user }</p>
  }
}

class ToDoList extends React.Component {

  state = {
    tasks: [],
    task: ''
  }

  write_task = event => this.setState({ task: event.target.value});
  
  add_task = () => this.setState({ tasks: [...this.state.tasks, this.state.task], task: '' });

  delete_task = i => {
    let tasks = [...this.state.tasks];
    tasks.splice(i, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h2>Lista de tareas</h2>
        <input value={this.state.task} onChange={this.write_task} type="text" />
        <button onClick={this.add_task}>Añadir tarea</button>
        <br />
        <ul>
          {
            this.state.tasks.map((task, i) => {
              return (
                <li key={i}>{task} <button onClick={() => this.delete_task(i)}>x</button></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class Child extends React.Component {

  render() {
    return(
      <div>
        <input onChange={this.props.change} type="text" />
        <button onClick={this.props.subtract}>Restar</button>
        <button onClick={this.props.sum}>Sumar</button>
      </div>
    )
  }
}

class App extends React.Component {

  state = {
    username: 'Juan Pablo 2',
    is_alive: true,
    text: '',
    users: [...data],
    number: 0,
    child_text: ''
  }

  un_mount = () => {
    this.setState({ is_alive: !this.state.is_alive });
  }

  input_change = (event) => {
    this.setState({ text: event.target.value })
  }

  add_user = () => {
    this.setState({ text: '', users: [...this.state.users, { name: this.state.text }]});
  }

  sum = () => this.setState({ number: this.state.number + 1 })
  subtract = () => this.setState({ number: this.state.number - 1 })
  change_child = (e) => this.setState({ child_text: e.target.value })

  // componentDidMount() {
  //   console.log('Se montó la App');
  // }
  
  // componentDidUpdate() {
  //   console.log('Se actualizó la App');
  // }

  render() {
    return (
      <div>
        <div>
          { this.state.is_alive ? 'Está vivo' : 'Está desmontado de la vida' }
        </div>

        { this.state.is_alive && <Box /> }
        
        <br />
        <button onClick={this.un_mount}>
          { this.state.is_alive ? 'Desmontar' : 'Montar' }
        </button>

        <br />
        { this.state.text || 'No hay texto' }
        
        <br />
        <input value={this.state.text} onChange={(e) => this.input_change(e)} type="text" />
        <button onClick={this.add_user}>Añadir usuario</button>
        <br />
        <h2>Lista de nombre</h2>
        {
          this.state.users.map((user, i) => {
            return <List key={i} user={user.name} />
          })
        }
        <br />

        <ToDoList />
        <br />

        { this.state.number }
        <br />
        { this.state.child_text || 'No has escrito desde el Child'}
        <Child change={this.change_child} sum={this.sum} subtract={this.subtract} />
      </div>
    );
  }
}

export default App;
