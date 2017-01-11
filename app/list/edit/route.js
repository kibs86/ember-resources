import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // can use params.list_id because of the url (:list_id)
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    saveList (list) {
      console.log("save dat shit");
      list.save();
    },
    cancel () {
      this.transitionTo('lists');
    },
  },
});
