import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return Ember.$.ajax("http://localhost:5367/employes/count");
  },
  actions: {
    error(error, transition) {
      if(error.errors){
        error.errors.forEach((er) => {
          this.toast.error("Erreur " + er.status + ", " + er.detail);
        })
      }
    }
  }
});
