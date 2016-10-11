import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import template from './gameAdd.html';

class GameAdd {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);

    this.newGame = {
      title: ''
    }

    this.helpers({});
  }

  submitGame() {
    Meteor.call('newGame', this.newGame);
  }
}

const name = 'gameAdd';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: GameAdd
});