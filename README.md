# Meteor Angular Boilerplate
Meteor app for finding cooks and getting that home-cooked meal you've been looking for!

## Installation
```git clone```
```cd meteor-angular-boilerplate```
```meteor```

## Application Structure
This app utilizes the standard structure for >1.4 Meteor projects:

```bash
cook-app/
 - client/
 --- main.css
 --- main.html
 --- main.js
 - imports/
 --- api/
 ---- collection_folder
 ------ collection.js
 ------ publish.js
 ------ methods.js
 --- ui/
 ---- components/
 ------ component_folder
 -------- component.css
 -------- component.html
 -------- component.js
 - node_modules/
 - server/
```

Most application logic will go into individual components built with Angular in the ```imports/ui/components``` directory

## App Entry Point
The app is bootstrapped via the ```client/main.js``` and the ```client/main.html```. Typically they are utilized only for starting the app, avoid putting logic or extra mark up in these files.
