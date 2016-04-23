import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let pull = this.modelFor('orgs.org.repo.pull');
    return pull.get('comments');
  }
});
