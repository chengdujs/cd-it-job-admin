import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
require('./Login.css');

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: 'admin', password: '', remember: false };
  }

  componentWillMount() {
  }

  handleSubmit(e) {
    e.nativeEvent.preventDefault();
    alert(`username=${this.state.username}, password=${this.state.password}, remember=${this.state.remember}`);
    localStorage.setItem('login', this.state.username);
    this.props.history.push('/');
  }

  handleInput(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} value={this.state.username} onChange={e => this.handleInput('username', e.target.value)} placeholder="Username" />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} value={this.state.password} onChange={e => this.handleInput('password', e.target.value)} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Checkbox value={this.state.remember} onChange={e => this.handleInput('remember', e.target.checked)}>Remember me</Checkbox>
          <a className="login-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" icon="login" className="login-btn"> Log in </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
