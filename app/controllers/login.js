import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    actions: {
    authenticate() {
      this.get("session").authenticate('authenticator:basic', this.get("username"), this.get("password")).
        then(() => {
          if (this.get("session.isAuthenticated")) {
            this.toast.success("Connexion réussie !!");
          } else {
            this.toast.error("Connexion échouée ! Vérifiez votre nom d'utilisateur et votre mot de passe !");
          }
        })
        .catch(() => {
          this.toast.error("Connexion échouée ! Vérifiez votre nom d'utilisateur et votre mot de passe !");
        })
    }
  }
});
