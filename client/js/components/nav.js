const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link } = Router;

const Nav = class Nav extends React.Component {
  render() {
    return (
      <ul className='nav'>
        <li><Link to='/one'>Page One</Link></li>
        <li><Link to='/two'>Page Two</Link></li>
        <li><Link to='/three'>Page Three</Link></li>
      </ul>
    );
  }
};

module.exports = Nav;
