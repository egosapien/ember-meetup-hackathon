import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('orgs.org');
    return org.get('repositories');
  }
});
