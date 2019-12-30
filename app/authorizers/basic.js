import { isEmpty } from '@ember/utils';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({

  authorize(data, block) {
    const user = data["user"];
    const pass = data["pass"];

    if (!isEmpty(user) && !isEmpty(pass)) {
      const authData = btoa(`${user}:${pass}`);
      block('Authorization', `Basic ${authData}`);
    }
  }
});
