import Controller from '@ember/controller';

export default Controller.extend({
  ajax: Ember.inject.service(),
  matriculeToAdd:null,
  actions:{
    save(){
      let isNew = this.get("model.isNew");
      this.get("model").save().then(() => {
        this.toast.success(isNew ? 'Insertion effectuée !' : 'Modification effectuée !');
        this.transitionToRoute("employes.detail", this.get("model.id"));
      }).catch((error) => {
        if(error.errors){
          error.errors.forEach((er) => {
            this.toast.error("Erreur " + er.status + " lors de la sauvegarde, " + er.detail);
          })
        }
      });
    },
    delete(){
      this.get("model").deleteRecord();
      this.get("model").save().then(() => {
        this.toast.success('Suppression effectuée !');
        this.transitionToRoute("employes.liste");
      }).catch((reason) => {
        if(reason.payload){
          this.toast.error(error.payload);
        }
        else if(reason.errors){
          reason.errors.forEach((er) => {
            this.toast.error("Erreur " + er.status + " lors de la suppression, " + er.detail);
          })
        }
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
      this.get('ajax').request("http://localhost:5367/techniciens/" + this.get("model.id") + "/manager/" + matricule + "/add").then((manager) => {
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
