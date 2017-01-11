import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list'); // use list because thats the name of the model directory
  },
  actions: {
    editList (list) {
      console.log("inside lists route, list is ", list);
      // same as doing a link-to within the template file
      this.transitionTo('list/edit', list);
    },
  },
});
