import Controller from '@ember/controller';

export default Controller.extend({
  ajax: Ember.inject.service(),

  matriculeToAdd:null,
  actions:{
    save(){
      this.get("model").save().then(() => {
        this.toast.success('Modification effectuée !');
      }).catch((reason) => {
        this.toast.error("Erreur lors de la sauvegarde ! " + reason);
      });
    },
    delete(){
      this.get("model").deleteRecord();
      this.get("model").save().then(() => {
        this.toast.success('Suppression effectuée !');
        this.transitionToRoute("employes.liste");
      }).catch((reason) => {
        this.toast.error("Erreur lors de la suppression ! " + reason);
      });
    },
    deleteManager(){
      this.set("model.manager", null);
      this.get("model").save().then(() => {
        this.toast.success("Suppression du manager effectuée !");
      }).catch((error) => {
        if(error.payload){
          this.toast.error(error.payload);
        }
      });
    },
    addManager(matricule){
      this.get('ajax').request("http://localhost:8080/techniciens/" + this.get("model.id") + "/manager/" + matricule + "/add").then((manager) => {
        this.toast.success("Affectation du manager effectuée !");
        this.store.findRecord('manager', manager.id).then((mana) => {
          this.set("model.manager", mana);
        });
        this.set("matriculeToAdd", null);
      }).catch((error) => {
        if(error.payload){
          this.toast.error(error.payload);
        }
      });
    }
  }
});
