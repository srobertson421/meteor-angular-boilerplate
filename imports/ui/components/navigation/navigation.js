import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './navigation.html';

class Navigation {
  constructor($scope, $state, $reactive) {
    'ngInject';

    this.$state = $state;
 
    $reactive(this).attach($scope);

    this.loggedIn = Meteor.userId();
  }

  logout() {
    Meteor.logout();
    this.$state.go('login');
  }
}

const name = 'navigation';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: Navigation
});