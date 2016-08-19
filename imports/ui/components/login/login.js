import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './login.html';

class Login {
  constructor($scope, $reactive, $state) {
    'ngInject';
 
    this.$state = $state;
 
    $reactive(this).attach($scope);
 
    this.credentials = {
      email: '',
      password: ''
    };
 
    this.error = '';
  }
 
  login() {
    Meteor.loginWithPassword(this.credentials.email, this.credentials.password,
      this.$bindToContext((err) => {
        if (err) {
          this.error = err;
        } else {
          this.$state.go('home');
        }
      })
    );
  }
}

const name = 'login';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: Login
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state(name, {
    url: '/login',
    template: '<login></login>'
  });
}