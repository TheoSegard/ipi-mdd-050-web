import Controller from '@ember/controller';

export default Controller.extend({
  matricule:null,
  actions:{
    rechercher(){
      this.store.queryRecord("employe", {matricule:this.get("matricule")}).then((employe) => {
        this.transitionToRoute(employe.get("urlDetail"), employe.get("id"));
      }).catch((reason) => {
        this.toast.error(reason);
      });
    }
  }
});
