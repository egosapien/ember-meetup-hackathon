import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org;
    this.modelFor('org').forEach(entry => {
      if (params.orgId === entry.get('id')) {
        org = entry;
      }
    })
    return org.get('repositories');
  }
});
