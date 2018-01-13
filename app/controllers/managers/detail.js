import Controller from '@ember/controller';

export default Controller.extend({
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
    }
  }
});
