import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(){
      this.get("model").save().then(() => {
        this.toast.success('Modification effectuée !');
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
        if(error.errors){
          error.errors.forEach((er) => {
            this.toast.error("Erreur " + er.status + " lors de la suppression, " + er.detail);
          })
        }
      });
    }
  }
});
