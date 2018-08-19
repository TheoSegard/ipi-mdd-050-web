import Route from '@ember/routing/route';
import ENV from "ipi-mdd-050-web/config/environment";

export default Route.extend({
  model(){
    return Ember.$.ajax(ENV.apiUrl + "/employes/count").catch((error) => {
      return "?";
    });
  },
  actions: {
    error(error, transition) {
      if(error.errors){
        error.errors.forEach((er) => {
          this.toast.error("Erreur " + er.status + ", " + er.detail);
        })
      }
    }
  }
});
