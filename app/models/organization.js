import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  name: attr("string"),
  iconUrl: attr("string"),
  repositories: DS.hasMany({ async: true })
});
