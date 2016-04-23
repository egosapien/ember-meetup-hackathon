import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  locked: attr('boolean'),
  state: attr('string'),
  repository: DS.belongsTo('repository')
});
