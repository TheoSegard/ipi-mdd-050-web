import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    equipe: {
      embedded: 'always',
      serialize: 'id'
    },
  }
});
