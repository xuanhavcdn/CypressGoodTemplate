# Raksul TestExam
How to setup Cypress test:
## 1. Download and Install  Node.js & NPM: 
- https://nodejs.org/en/download/
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
## 2. Run command:
```javascript
npm install
```
## 3. Start cypress: 
```javascript
npx cypress open
```
## 4: Currently, test exam using staging ENV, we should follow format to start cypress test with specific .env file:
### Open Cypress Dashboard: 
```javascript
CYPRESS_ENV=staging npx cypress open
```
### Run Cypress headless in local machine: 
```javascript
CYPRESS_ENV=staging npx cypress run
```