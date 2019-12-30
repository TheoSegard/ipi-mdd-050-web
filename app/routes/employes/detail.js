import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params){
    if(params.employeId === "newC"){
      return this.store.createRecord("commercial", {
        modelName:"commercial",
        dateEmbauche: [
          2018,1,1
        ]
      });
    } else if(params.employeId === "newT"){
      return this.store.createRecord("technicien", {
        modelName:"technicien",
        dateEmbauche: [
          2018,1,1
        ]
      });
    } else if(params.employeId === "newM"){
      return this.store.createRecord("manager", {
        modelName:"manager",
        dateEmbauche: [
          2018,1,1
        ]
      });
    } else {
      return this.store.find('employe', params.employeId).catch();
    }
  },
  actions: {
    willTransition(){
      if(this.controller.get("model.hasDirtyAttributes")){
        this.controller.get("model").rollbackAttributes();
      }
    },
    error(error, transition) {
      if(error && error.message){
        this.toast.error("Erreur HTTP '" + error.status + "', " + error.message);
      }
    }
  }
});
