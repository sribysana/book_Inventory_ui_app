import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import HeaderContainer from '../common/header/HeaderContainer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className ="container">
        <HeaderContainer />
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {this.props.children}



      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
