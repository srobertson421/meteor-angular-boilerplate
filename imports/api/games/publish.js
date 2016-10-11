import { Meteor } from 'meteor/meteor';
import { Games } from './collection';

if(Meteor.isServer) {
  Meteor.publish('games.all', function() {
    return Games.find({});
  });
}