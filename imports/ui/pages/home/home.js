import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as GameList } from '../../components/gameList/gameList';
import { name as GameAdd } from '../../components/gameAdd/gameAdd';

import template from './home.html';

class Home {}

const name = 'home';

export default angular.module(name, [angularMeteor, uiRouter, GameList, GameAdd])
.component(name, {
  template,
  controllerAs: name,
  controller: Home
})
.config(config);

function config($stateProvider) {
  'ngInject'

  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  });
}