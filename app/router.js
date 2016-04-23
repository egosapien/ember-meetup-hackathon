import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs', {path: "org"}, function() {
    this.route('org', {path: ':orgId'}, function() {
      this.route('repos', {path: 'repos'});
      this.route('repo', {path: "repo/:repoId"}, function() {
        this.route('pulls', function() {
          this.route('comments');
        });
      });
    });
  });
});

export default Router;
