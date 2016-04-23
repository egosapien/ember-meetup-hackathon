import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  homepage: attr('string'),
  stargazersCount: attr('number'),
  watchersCount: attr('number'),
  organization: DS.belongsTo('organization'),
  pulls: DS.hasMany('pulls')
});
