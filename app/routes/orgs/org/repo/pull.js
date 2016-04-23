import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: "PRs"
  },
  model(params) {
    return this.store.find('pull', params.pullId);
  }
});
