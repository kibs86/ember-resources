import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('lists');
  this.route('list', { path: 'lists/:list_id' }); // when you see lists/:list_id path, render whatever is in the list folder
});

export default Router;
