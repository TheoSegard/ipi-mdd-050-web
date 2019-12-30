import DS from 'ember-data';
import ENV from "ipi-mdd-050-web/config/environment";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:basic',
  host:ENV.apiUrl,
  session: service(),
  toast: service('toast'),
  handleResponse(status, headers, payload) {
    if (status === 401) {
      this.get("toast").error("Non autorisé !");
    } else if (status === 403) {
      this.get("toast").error("Accès interdit !");
    }
    else if (status !== 200 && payload && payload.message){
      return payload;
    } else if (status === 0 && payload === ""){
      return {error:"Une erreur technique est survenue"};
    }
    else {
      return this._super(...arguments);
    }
  },
  pathForType() {
      return "employes";
  }
});
