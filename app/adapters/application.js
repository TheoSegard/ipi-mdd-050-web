import DS from 'ember-data';
import ENV from "ipi-mdd-050-web/config/environment";

export default DS.RESTAdapter.extend({
  host:ENV.apiUrl,
  handleResponse(status, headers, payload) {
    if (status !== 200 && payload && payload.error){
      return payload;
    } else if (status === 0 && payload === ""){
      return {error:"Une erreur technique est survenue"};
    }
    else {
      return this._super(...arguments);
    }
  },
  pathForType(type) {
      return "employes";
  }
});
