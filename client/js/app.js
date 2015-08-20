const React = require('react');
const { Router, Route } = require('react-router');
const History = require('react-router/lib/HashHistory').history;

const Nav = require('./components/nav');

const App = class App extends React.Component {
  render () {
    return (
      <div id='app' className='container'>
        <Nav />
        {this.props.children}
      </div>
    );
  }
};

const routes = {
  path: '/',
  component: App,
  childRoutes: [{
    path: '/one',
    getComponents (callback) {
      require.ensure([], (require) => {
        setTimeout(()=> {
          callback(null, require('./pages/one'))
        }, 1000);
      });
    }
  }, {
    path: '/two',
    getComponents (callback) {
      require.ensure([], (require) => {
        setTimeout(()=> {
          callback(null, require('./pages/two'))
        }, 1000);
      });
    }
  }, {
    path: '/three',
    getComponents (callback) {
      require.ensure([], (require) => {
        setTimeout(()=> {
          callback(null, require('./pages/three'))
        }, 1000);
      });
    }
  }]
}

React.render(<Router history={History} children={routes} />,document.getElementById('root'));
