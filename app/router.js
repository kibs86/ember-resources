import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('lists');
  // when you see lists/:list_id path, render whatever is in the list folder
  this.route('list', { path: 'lists/:list_id' });
  this.route('list/edit', { path: 'lists/:list_id/edit' });
});

export default Router;
