import Ember from 'ember';

export default Ember.Component.extend({
  newItem: {
    content: null,
    done: false,
  },
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
    createItem () {
      console.log("inside createItem, item is " , this.get('item')); // returns undefined
      console.log("inside createItem, newItem is ", this.get('newItem')); // returns what we want so that's what we'll send up
      let data = this.get('newItem');
      // get whole list object and Ember will pull out the ID and do what it needs to.  It won't work if you try to
      // pull out the ID yourself
      data.list = this.get('list');
      this.sendAction('createItem', data);
    },
  },
});
