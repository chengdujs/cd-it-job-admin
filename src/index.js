import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './layouts/App';
import 'antd/dist/antd.css';
import './styl/all.styl';

function todoApp(prevState = {}, action) {
  switch (action.type) {
    case 'test':
      console.log(prevState, action);
      return Object.assign({}, prevState, { abc: Math.random() })
    default:
      return prevState
  }
}

const store = createStore(todoApp);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./layouts/App', () => { render(App) });
}
