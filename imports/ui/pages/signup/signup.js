import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './signup.html';

class Signup {
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
 
  signup() {
    Accounts.createUser(this.credentials,
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

const name = 'signup';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: Signup
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state(name, {
    url: '/signup',
    template: '<signup></signup>'
  });
}