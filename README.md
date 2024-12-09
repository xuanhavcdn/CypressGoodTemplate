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

### Test Cases Design
| Confirmation contents                                  | Operation target                                               |
| ------------------------------------------------------ | -------------------------------------------------------------- |
| Can enter a valid email address                        | Email input field                                               |
| Can enter a valid first name                           | First Name input field                                          |
| Can enter a valid last name                            | Last Name input field                                           |
| Can select an option for "Where did you hear about us?" | "Where did you hear about us?" dropdown/select                  |
| Can select multiple services of interest               | "Services of Interest" checkboxes (Printing, Logistics, Advertisement) |
| Can select a valid option for "Type of Association"    | "Type of Association" dropdown (Prospect, Partner, Reseller, Vendor, Other) |
| Can type a valid explanation                           | Explanation input field                                         |
| Form submits successfully with all required fields filled | Submit button (all fields filled correctly)                     |
| Form submission shows success message                  | Success message after form submission (e.g., "Your inquiry has been submitted successfully!") |
| Form doesn't submit with missing required fields       | Submit button (missing fields like email or first name)         |
| Can submit the form with only required fields filled (email, first name, last name) | Submit button (only required fields filled)                     |
| Form shows error message for invalid email format      | Email input field (invalid email format, e.g., missing '@')     |
| Can submit form with "Other" selected for "Type of Association" | "Type of Association" dropdown (select "Other" and input explanation) |
| Form correctly resets after successful submission      | Reset form button (or page refresh after submission)           |
| Form submits and records services of interest          | Submit button (multiple services selected like "Printing" and "Logistics") |
| Form correctly handles long text input for "Explanation" | Explanation input field (long text input)                      |
| Email field is required and shows error when left empty | Submit button (empty email field)                               |
| "Where did you hear about us?" field shows appropriate options | "Where did you hear about us?" dropdown/select (check options like "Advertisement", "Logistics") |
| Form can handle special characters in the "Explanation" field | Explanation input field (input special characters like @, #, $, %) |
| Form input fields are properly cleared after successful form submission | Form inputs (clear after successful submission)                 |
| Form input fields are properly cleared after reset action | Reset button (clear after reset)                                |
| Email field shows validation message for incorrect format | Email input field (invalid format, e.g., missing domain)        |
| Form handles empty fields gracefully without submission | Submit button (empty or incomplete form)                        |
| Form fields are accessible for screen readers (i.e., proper labels for each input) | Accessibility (ensure ARIA labels or appropriate field labels are used) |
| Form layout is responsive on mobile devices            | Test the form layout on mobile devices (small screens)         |
