import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import AddRandomPeople from './pages/AddRandomPeople';
import AddSinglePerson from './pages/AddSinglePerson';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addrandompeople' component={AddRandomPeople} />
            <Route exact path='/addsingleperson' component={AddSinglePerson} />
      </Layout>
    );
  }
}
