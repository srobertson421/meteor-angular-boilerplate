import angular from 'angular';
import 'tether/dist/js/tether.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../imports/ui/stylesheets/flatbootstrap.css';
 
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