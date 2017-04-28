import React, { Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: 'admin', password: '' };
  }


  componentWillMount() {
    console.log(this.props);
  }


  handleSubmit(e) {
    e.nativeEvent.preventDefault();
    alert(`username=${this.state.username}, password=${this.state.password}`);
    localStorage.setItem('login', this.state.username);
    this.props.history.push('/');
  }

  handleInput(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          User name:<input type="text" value={this.state.username} onChange={e => this.handleInput('username', e.target.value)} />
          <br />
          Password: <input type="password" value={this.state.password} onChange={e => this.handleInput('password', e.target.value)} />
          <br />
          <button>User Login</button>
        </form>
      </div>
    );
  }
}
