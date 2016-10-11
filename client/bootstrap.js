import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
 
import { Meteor } from 'meteor/meteor';

import { name as Main } from '../imports/ui/main/main';
 
function onReady() {
  angular.bootstrap(document, [
    Main
  ], {
    strictDi: true
  });
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}