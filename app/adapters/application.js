import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://emberconf-state-api.herokuapp.com',
  namespace: 'api',
  ajaxOptions() {
    let hash = this._super(...arguments);

    hash.contentType = 'application/json';

    let beforeSend = hash.beforeSend;
    hash.beforeSend = function(xhr) {
      if (beforeSend) {
        beforeSend(xhr);
      }
      xhr.setRequestHeader('Accept', 'application/json');
    };
    return hash;
  }
});
