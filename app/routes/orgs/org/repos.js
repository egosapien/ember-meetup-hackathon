import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb:{
    title: null
  },
  model(params) {
    let org = this.modelFor('orgs.org');
    this.set('org', org.get('name'));
    return new Ember.RSVP.Promise(resolve => {
      org.get('repositories').then(repos => {
        resolve(Ember.Object.create({
          org: org,
          repos: repos
        }));
      });
    });
  }
});
