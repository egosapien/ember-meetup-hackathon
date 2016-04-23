import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {

  },
  model(params) {
    return this.store.find('organization', params.orgId);
  },
  afterModel(model) {
    const name = model.get('name');
    const newCrumb = {
      title: name
    };

    this.set('breadCrumb', newCrumb);
  }
});
