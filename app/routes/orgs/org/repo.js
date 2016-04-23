import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {},
  model(params) {
    return this.store.find('repository', params.repoId);
  },
  afterModel(model) {
    const name = model.get('name');

    const newCrumb = {
      title: name
    };

    this.set('breadCrumb', newCrumb);
  }
});
