import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      console.log("you're inside toggleDone in listr-list/item Component");
      this.sendAction('toggleDone', this.get('item'));
      //return this.toggleProperty('listItemCompleted');
    },
    delete () {
      console.log("YEAAHHH DELETE ME");
      this.sendAction('delete', this.get('item')); // don't say .delete because it will delete the javascript object
    },
  },
});
