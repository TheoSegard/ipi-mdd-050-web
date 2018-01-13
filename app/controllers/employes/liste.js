import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'size', 'sortDirection', 'sortProperty'],
  page:0,
  size:10,
  sortDirection:"ASC",
  sortProperty:"matricule",
});
