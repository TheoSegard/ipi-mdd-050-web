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
    deleteTechniciens(id){
      this.get('ajax').request("http://localhost:5367/managers/" + this.get("model.id") + "/equipe/" + id + "/remove").then(() => {
        let tech = this.store.peekRecord('technicien', id);
        this.get("model.equipe").removeObject(tech);
        this.toast.success("Suppression du technicien de l'équipe effectuée !");
      }).catch((error) => {
        if(error.payload){
          this.toast.error(error.payload);
        }
      });
    },
    addTechniciens(matricule){
      this.get('ajax').request("http://localhost:5367/managers/" + this.get("model.id") + "/equipe/" + matricule + "/add").then((technicien) => {
        this.toast.success("Ajout du technicien dans l'équipe effectuée !");
        this.store.findRecord('technicien', technicien.id).then((tech) => {
          this.get("model.equipe").pushObject(tech);
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
