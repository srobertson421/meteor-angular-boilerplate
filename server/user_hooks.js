import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  user.role = 'user';
  // console.log('User options:', options);
  // console.log('User object:', user);

  return user;
});