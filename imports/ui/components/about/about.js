import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

class About {}

const name = 'about';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  template,
  controllerAs: name,
  controller: About
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('about', {
    url: '/about',
    template: '<about></about>'
  });
}