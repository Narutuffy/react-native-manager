import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAMoZEgPIA2oOw_RluBLexetxbctT9CKaY",
      authDomain: "mana-633dc.firebaseapp.com",
      databaseURL: "https://mana-633dc.firebaseio.com",
      projectId: "mana-633dc",
      storageBucket: "mana-633dc.appspot.com",
      messagingSenderId: "654421056604"
    };
    firebase.initializeApp(config); 
  }

  render() {
    const store = createStore((reducers), {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
      <Router />
    </Provider>
    );
  }
}

export default App;
