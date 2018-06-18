import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  "nom":DS.attr("string"),
  "prenom":DS.attr("string"),
  "matricule":DS.attr("string"),
  "salaire":DS.attr("number"),
  "dateEmbauche":DS.attr(),
  "primeAnnuelle": DS.attr("number"),
  "nbConges": DS.attr("number"),
  "nombreAnneeAnciennete": DS.attr("number"),
  "urlDetail": Ember.computed("modelName", function(){
    return this.get("modelName") + "s.detail";
  }),
  /*"modelName": Ember.computed("matricule", function(){
    if(this.get("matricule")){
      switch (this.get("matricule").substr(0,1)){
        case "M":
          return "manager";
        case "T":
          return "technicien";
        case "C":
          return "commercial";
      }
    }
    return "";
  }),*/
  dateEmbaucheFormatee:Ember.computed("dateEmbauche", function(){
    if(this.get("dateEmbauche")){
      let jour = "00" + this.get("dateEmbauche")[2];
      let mois = "00" + this.get("dateEmbauche")[1];
      return jour.substr(jour.length - 2) + "/" + mois.substr(mois.length - 2) + "/" + this.get("dateEmbauche")[0];
    }
  })
});
