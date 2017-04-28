import React, { Component } from 'react';

export class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (!localStorage.getItem('login')) {
      this.props.history.push('/login');
    }
  }
  logout() {
    localStorage.removeItem('login');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>这是Main Page
        <button onClick={this.logout}>退出</button>
      </div>
    );
  }
}
