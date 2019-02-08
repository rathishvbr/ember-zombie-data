import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: 'none',
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('requirements', { path: '/r' });
  this.route('index', { path: '/' });
  this.route('employees', function() {
    this.route('list', { path: '/' });
    this.route('neworedit', { path: '/neworedit/:id' });
  });
});

export default Router;