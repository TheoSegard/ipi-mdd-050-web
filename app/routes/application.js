import Route from '@ember/routing/route';
import ENV from "ipi-mdd-050-web/config/environment";
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  model(){
    return Ember.$.ajax(ENV.apiUrl + "/employes/count").catch((error) => {
      return "?";
    });
  },
  sessionInvalidated(){
    this.transitionTo("index");
  }
});
