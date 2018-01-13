import Employe from './employe';
import DS from 'ember-data';

export default Employe.extend({
  "grade": DS.attr("number"),
  "manager": DS.belongsTo("manager"),
});
