// need to make a few changes from default adapter.js file thats created to
// use the one provided in this template by GA

//import DS from 'ember-data';
import ApplicationAdapter from 'ga-wdi-boston.ember-resources/application/adapter';

//export default DS.JSONAPIAdapter.extend({
export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, { includeId: true });
    let listId = serialized.list_id;
    let url = `${api}/lists/${listId}/items`;
    let data = { item: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
