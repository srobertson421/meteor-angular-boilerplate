import angular from 'angular';
 
import { Meteor } from 'meteor/meteor';

import { name as CookApp } from '../imports/ui/components/cook_app/cook_app';
 
function onReady() {
  angular.bootstrap(document, [
    CookApp
  ], {
    strictDi: true
  });
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}