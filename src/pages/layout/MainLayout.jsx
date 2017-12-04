import './MainLayout.styl';

import React, { Component } from 'react';
import { Redirect, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import { BindSelf } from '../../common';
import { menus } from './menus';

function isAbsolutePath(path) {
  return path.indexOf('http') === 0;
}

export default class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: false
    };
  }

  getNavMenuItems(menusData, parentPath = '') {
    if (!menusData) {
      return [];
    }
    return menusData.map((item) => {
      if (!item.name) {
        return null;
      }
      let itemPath;
      if (isAbsolutePath(item.path)) {
        itemPath = item.path;
      } else {
        itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
      }
      if (item.children && item.children.some(child => child.name)) {
        return (
          <Menu.SubMenu
            title={
              item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              ) : item.name
            }
            key={item.key || item.path}
          >
            {this.getNavMenuItems(item.children, '')}
          </Menu.SubMenu>
        );
      }
      const icon = item.icon && <Icon type={item.icon} />;
      return (
        <Menu.Item key={item.key || item.path}>
          {
            isAbsolutePath(itemPath) ?
              <a href={itemPath} target={item.target}>{icon}<span>{item.name}</span></a> :
              <Link to={itemPath} target={item.target} replace={itemPath === this.props.location.pathname}>{icon}<span>{item.name}</span></Link>
          }
        </Menu.Item>
      );
    });
  }

  getCurrentMenuSelectedKeys(props) {
    const { location: { pathname } } = props || this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return [menus[0].key];
    }
    return keys;
  }

  @BindSelf()
  handleMenuCollapseChange() {
    this.setState({ menuCollapsed: !this.state.menuCollapsed });
  }

  render() {
    return (
      <Layout className="page-layout">
        <Layout.Sider collapsed={this.state.menuCollapsed} onCollapse={this.handleMenuCollapseChange}>
          <div className="logo-div text-center">
            <h2 title="IT-JOB Admin">{this.state.menuCollapsed ? 'IJA' : 'IT-JOB Admin'}</h2>
          </div>
          <Menu theme="dark" mode="inline" selectedKeys={this.getCurrentMenuSelectedKeys()}>
            {this.getNavMenuItems(menus)}
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header>
            <Icon className="menu-collapse-icon" type={this.state.menuCollapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.handleMenuCollapseChange}></Icon>
          </Layout.Header>
          <Layout.Content>
            <Switch>
              {this.props.routes.map(route => (
                <Route path={route.path} exact render={props => (
                  <route.component {...props} routes={route.routes} />
                )}></Route>
              ))}
            </Switch>
          </Layout.Content>
          {false ? (<Layout.Footer>折是Footer</Layout.Footer>) : null}
        </Layout>
      </Layout>
    );
  }
};
