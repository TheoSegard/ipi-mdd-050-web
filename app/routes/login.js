import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import { inject as service } from '@ember/service';


export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  actions:{
    login(){
      this.get('session').authenticate('authenticator:basic', this.get("username"), this.get("password"));
    }
  }
});
