import Employe from './employe';
import DS from 'ember-data';

export default Employe.extend({
  "equipe": DS.hasMany("technicien"),
});
