import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editList () {
      console.log("let's edit some shiz");
      console.log("the list I'm clicking edit on is: ", this.get('list'));
      this.sendAction('editList', this.get('list'));
    },
  },
});
