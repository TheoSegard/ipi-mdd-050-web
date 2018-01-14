import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'size', 'sortDirection', 'sortProperty'],
  page:0,
  size:10,
  sortDirection:"ASC",
  sortProperty:"matricule",
  actions:{
    sortBy(sortProperty){
      this.transitionToRoute("employes.liste", {queryParams:{page: this.get("page"), size: this.get("size"), sortProperty:sortProperty, sortDirection: this.get("sortDirection") === "ASC" ? "DESC" : "ASC"}});
    }
  }
});
