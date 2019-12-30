import Base from 'ember-simple-auth/authenticators/base';
import ENV from "ipi-mdd-050-web/config/environment";
import {Promise} from "rsvp";
import $ from "jquery";
export default Base.extend({
  host:ENV.apiUrl,
  restore(properties) {
    return new Promise((resolve, reject) =>{
      $.ajax({
        url: `${this.get("host")}/users/me`,
        success : function(){
          resolve(properties);
        },
        error: function(){
          reject();
        },
        headers: {
          "Authorization": "Basic " + btoa(`${properties.user}:${properties.pass}`)
        }
      });
    });
  },
  authenticate(user,pass) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${this.get("host")}/users/me`,
        success : function(){
          resolve({user : user, pass: pass});
        },
        error: function(){
          reject();
        },
        headers: {
          "Authorization": "Basic " + btoa(`${user}:${pass}`)
        }
      });
    });
  },
});
