import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://5c57fdfb9815f6001490359a.mockapi.io',
    handleResponse(status) {
    if (404 === status) {
      return {id: "57", name: "india"}
    }

    return this._super(...arguments);
  }
});