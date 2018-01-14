import Controller from '@ember/controller';

export default Controller.extend({
  matricule:null,
  actions:{
    rechercher(){
      this.store.queryRecord("employe", {matricule:this.get("matricule")}).then((employe) => {
        this.transitionToRoute(employe.get("urlDetail"), employe.get("id"));
      }).catch((error) => {
        if(error.errors){
          error.errors.forEach((er) => {
            this.toast.error("Erreur " + er.status + ", " + er.detail);
          })
        }
      });
    }
  }
});
