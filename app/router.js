import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('splash-page');
  this.route('la-fitness-home');
  this.route('golds-gym-home');
  this.route('four-seasons-home');
});

export default Router;
