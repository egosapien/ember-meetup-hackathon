import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  body: attr('string'),
  commitId: attr('string'),
  diffHunk: attr('string'),
  path: attr('string'),
  pull: DS.belongsTo('pull')
});
