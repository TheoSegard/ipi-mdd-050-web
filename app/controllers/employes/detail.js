import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(){
      this.get("model").save().then(() => {
        this.toast.success('Insertion effectuée !');
        this.transitionToRoute(this.get("model.urlDetail"), this.get("model.id"));
      }).catch((reason) => {
        this.toast.error("Erreur lors de la sauvegarde ! " + reason);
      });
    }
  }
});
