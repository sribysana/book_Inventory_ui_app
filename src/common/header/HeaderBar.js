import React, { PropTypes } from 'react';
import { List, Map } from 'immutable';
import { Link, IndexLink } from 'react-router';
import { NavDropdown, MenuItem, Nav, Glyphicon, NavItem } from 'react-bootstrap';
export default function HeaderBar(props) {
  /* eslint-disable no-console */
  //console.log('props in HeaderBar', props.user);
  /* eslint-disable no-console */


  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink to="/" className="navbar-brand">Home</IndexLink>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className=""><Link to="/book" >Book</Link></li>
            <li className=""><Link to="/author" >Author</Link></li>
            <li className=""><Link to="/fuel-savings">Demo App</Link></li>


            <li><a href="#">Link</a></li>
          </ul>
          <div className="nav navbar-nav navbar-right">
            <Nav pullRight bsStyle="tabs" activeKey="1">
              <NavItem eventKey="3" disabled><Glyphicon glyph="user" /></NavItem>
              <NavDropdown eventKey="4" title={props.user.get('name')|| 'Login'} id="nav-dropdown">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
              </ NavDropdown>
              <NavItem eventKey="3" disabled><Glyphicon glyph="shopping-cart" /> {props.cart.size}</NavItem>
            </Nav>

          </div>
        </div>
      </div>
    </nav>
  );
}

HeaderBar.propTypes = {
  user: PropTypes.instanceOf(Map).isRequired,
  cart: PropTypes.instanceOf(List).isRequired,
};
