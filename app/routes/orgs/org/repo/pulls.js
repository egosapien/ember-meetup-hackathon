import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let repo = this.modelFor('orgs.org.repo');
    return repo.get('pulls');
  }
});
