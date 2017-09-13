# React chat app

### Dependancies
* Framworks and servers related
```
    express: ~4.0.0,
    react: 15.4.2, 
    react-dom: 15.4.2, 
    babel-core: 6.23.1, 
    babel-loader: 6.3.2, 
    babel-preset-es2015: 6.22.0, 
    babel-preset-react: 6.23.0
```
* Extra functions
```
    jquery: 3.1.1, 
    body-parser: 1.17.2, 
    shortid: 2.2.8, 
    xss-filters: 1.2.7
    socket.io: 2.0.3, 
    socket.io-client: 2.0.3, 
    pg (postgreSQL): 7.3.0
```
### Dev-dependancies
```
* Dev-servers and build
    webpack: 2.2.1, 
    nodemon: 1.11.0

* WIP: Testing
    babel-jest: 20.0.3, 
    enzyme: 2.9.1
```
### Installing minimum deps

* To run the app, run the following command inside the folder
```
    npm install
```
### Scripts

* When on development, run the following commands
```
    npm start
```
```
    npm run build
```

### Each of the script will run the following commands

```
build: webpack -d --watch
start: nodemon api-server/index.js
```

### To test, run the following command
```
    npm run test
```
### Test script will run the following command
```
    test: jest --coverage --watchAll
```
### Check points

* No scaffolding tool was used
* xss-filters is used to prevent Cross-site scripting (XSS) attacks
* maintainability : code was separated into modules 
* testability : each module is by feature for testablity 
* readability : all files follows same guidelines and structures
* UX: given sample UX was built within time constraint
