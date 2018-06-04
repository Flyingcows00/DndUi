import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('monsters');
  this.route('players');
  this.route('encounter', function() {
    this.route('builder')
  });
});

export default Router;
