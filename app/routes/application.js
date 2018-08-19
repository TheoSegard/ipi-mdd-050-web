import Route from '@ember/routing/route';
import ENV from "ipi-mdd-050-web/config/environment";

export default Route.extend({
  model(){
    return Ember.$.ajax(ENV.apiUrl + "/employes/count").catch((error) => {
      return "?";
    });
  }
});
