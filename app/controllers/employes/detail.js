import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(){
      this.get("model").save().then(() => {
        this.toast.success('Insertion effectuée !');
        this.transitionToRoute(this.get("model.urlDetail"), this.get("model.id"));
      }).catch((error) => {
        if(error.errors){
          error.errors.forEach((er) => {
            this.toast.error("Erreur " + er.status + " lors de la sauvegarde, " + er.detail);
          })
        }
      });
    }
  }
});
