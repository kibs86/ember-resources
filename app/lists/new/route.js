import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('list', {});
  },
  actions: {
    createList (list) {
      console.log("create dat shit");
      list.save();
    },
    cancelCreateList () {
      this.transitionTo('lists');
    },
  },
});
