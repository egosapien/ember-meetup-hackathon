import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: "PRs"
  },
  model() {
    let repo = this.modelFor('orgs.org.repo');
    return repo.get('pulls');
  }
});
