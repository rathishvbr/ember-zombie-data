import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr("string"),
  surname: attr("string"),
  country: belongsTo("countrie"),
  address: attr("string"),
  email: attr("string"),
  phone: attr("number")
});