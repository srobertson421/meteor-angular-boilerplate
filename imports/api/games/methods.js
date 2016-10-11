import { Meteor } from 'meteor/meteor';
import { Games } from './collection';

Meteor.methods({
  newGame: function(newGame) {
    if(!this.userId) {
      throw new Meteor.Error(400, 'Unauthorized');
    }

    newGame.owner = this.userId;

    return Games.insert(newGame); 
  }
}); 