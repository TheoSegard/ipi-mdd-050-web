import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  matricule:null,
  session: service(),
  actions:{
    rechercher(){
      this.store.queryRecord("employe", {matricule:this.get("matricule")}).then((employe) => {
        this.transitionToRoute("employes.detail", employe.get("id"));
      }).catch((error) => {
        if(error.message){
          this.toast.error("Erreur " + error.status + ", " + error.message);
        }
      });
    },
    invalidateSession() {
      this.get('session').invalidate();
      this.toast.success("Déconnexion effectuée");
    }
  }
});
