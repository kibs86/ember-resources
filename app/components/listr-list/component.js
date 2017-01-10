import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      console.log("you're inside toggleItemDone in listr-list component, and item is ", item);
      this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      console.log("you're inside deleteItem in listr-list component, and item is ", item);
      this.sendAction('deleteItem', item);
    },
  },
});
