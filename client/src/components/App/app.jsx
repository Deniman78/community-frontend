import React from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes';
import { AuthPage } from '../Pages';

import styled from 'styled-components';

class App extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    const routes = Routes(this.props.user);
    return <AppContainer>{routes}</AppContainer>;
  }
}

const AppContainer = styled.div`
  background: #f7f7fc;
`;

const mapStateToProps = ({ account }) => ({
  user: account.user,
});

export default connect(mapStateToProps)(App);
