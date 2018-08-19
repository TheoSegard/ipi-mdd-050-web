import Route from '@ember/routing/route';

export default Route.extend({
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
    error(error, transition) {
      console.log(transition);
      if(error.message){
        this.toast.error("Erreur HTTP '" + error.status + "', " + error.message);
      }
    }
  }
});
