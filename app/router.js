import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('org', function() {
    this.route('repos', {path: ":orgId/repos"});
    this.route('repo', {path: ":orgId/repo/:repoId"});
  });
});

export default Router;
