import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list'); // use list because thats the name of the model directory
  },
});
