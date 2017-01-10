import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone (item) {
      console.log("you're inside 'list' route and item is ", item);
      item.toggleProperty('done');
      console.log("inside 'list' route after toggle, and item done is ", item.get('done'));
      item.save();
    },
    deleteItem (item) {
      console.log("you're inside 'list' route and item is ", item);
      item.destroyRecord();
      console.log("item has been deleted");
    }
  },
});
