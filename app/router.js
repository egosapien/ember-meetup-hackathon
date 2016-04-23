import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('org', {path: "org/:orgId"}, function() {
    this.route('repos', {path: "repos"});
    this.route('repo', {path: "repo/:repoId"});
  });
});

export default Router;
