# Raksul TestExam
## Cypress project introduction:
- Manage different ENVs via .env file
- Design tests structure based on POM
- Integration with github actions, CICD pipeline, parallel run
- Integration with cypress cloud: Push notification to slack channel, cypress reports (Cost money)
- Save artifact reports after run complete (Github Free)
- Able to run E2E and API tests
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

### Test Cases Design
| Confirmation contents                                  | Operation target                                               |
| ------------------------------------------------------ | -------------------------------------------------------------- |
| Can enter a valid email address                        | Email input field                                               |
| Can enter a valid first name                           | First Name input field                                          |
| Can enter a valid last name                            | Last Name input field                                           |
| Can select an option for "Where did you hear about us?" | "Where did you hear about us?" dropdown/select                  |
| Can select multiple services of interest               | "Services of Interest" checkboxes (Printing, Logistics, Advertisement) |
| Can select only 1 valid option for "Type of Association" | "Type of Association" radio button (Prospect, Partner, Reseller, Vendor, Other) |
| Can type a valid explanation                           | Explanation input field                                         |
| Form submits successfully with all required fields filled | Submit button (all fields filled correctly)                     |
| Form submission shows success message                  | Success message after form submission ("Your inquiry has been submitted successfully!") |
| Form doesn't submit with missing required fields       | Submit button (missing fields: email, first name, last name, infoSource, Services of Interest, type of association) |
| Can submit the form with only required fields filled (email, first name, last name, infoSource, Services of Interest, type of association) | Submit button (only required fields filled)                     |
| Form shows error message for invalid email format      | Email input field (invalid email format, e.g., missing '@')     |
| Can submit form with "Other" selected for "Type of Association" | "Type of Association" dropdown (select "Other" and input explanation) |
| Form correctly resets after reload successful submission screen | Reload the page after submission (check that form fields are reset) |
| Form submits and records services of interest          | Submit button (multiple services selected like "Printing" and "Logistics") |
| Form correctly handles long text input for "Explanation" | Explanation input field (long text input)                      |
| Email, First Name, Last Name, Where Did You Hear About Us, Services of Interest, and Type of Association fields are required and show error when left empty | Submit button (empty fields: email, first name, last name, whereDidYouHear, servicesOfInterest, typeOfAssociation) |
| Form can handle special characters in the "Explanation" field | Explanation input field (input special characters like @, #, $, %) |
| Email field shows validation message for incorrect format | Email input field (invalid format, e.g., missing domain)        |
| Form layout is responsive on mobile devices            | Test the form layout on mobile devices (small screens)         |
| First Name, Last Name, and Explanation fields accept valid input length | First Name, Last Name, Explanation input fields (check max character limits) |
| Form doesn't submit with partially filled fields (missing some required fields) | Submit button (e.g., email and first name filled, but missing explanation or services) |
| Form prevents multiple submissions                     | Submit button (prevent multiple clicks or submissions)         |
| Focus is correctly set to the first field on form load | First Name (or email, depending on your form flow) input field  |
| Form fields are navigable using the Tab key            | Tab key navigation (ensure focus moves correctly between fields) |
| Form works properly across different browsers          | Cross-browser testing (Chrome, Firefox, Safari, Edge)          |
| Browser auto-fill works for required fields            | Auto-fill (check if browser auto-fills email, first name, etc.) |
| Form shows appropriate error message for invalid fields | Error messages (e.g., "'email' is not a valid email", "${fieldName} is required") |
