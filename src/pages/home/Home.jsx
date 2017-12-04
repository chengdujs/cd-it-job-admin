import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BindSelf } from '../../common';
import { Button } from 'antd';
import { List, Map, Seq, Set, Stack, OrderedMap, OrderedSet, fromJS } from 'immutable';


class Home extends Component {

  constructor(props) {
    super(props);
    console.log('props', props.dispatch);
    var a = List();
    // a.b = 2;
    var b = a.push('dfafdsaf');

    console.log(a, b);
  }

  @BindSelf()
  handleClick() {
    this.props.onClick('fdsfdas');
  }

  @BindSelf()
  logout() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>{this.props.abc}</h2>
        <Button onClick={this.handleClick}>Test</Button>
        <Button onClick={this.logout}>退回到登录页</Button>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    abc: state.abc
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      setTimeout(() => {
        var a = dispatch({ type: 'test' });
        console.log('result=', a);
      }, 0);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
