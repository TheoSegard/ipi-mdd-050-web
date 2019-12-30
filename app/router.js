import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employes', function() {
    this.route('detail', {
      path: '/detail/:employeId'
    });
    this.route('edit');
    this.route('liste');
  });
  this.route('login');
});

export default Router;
