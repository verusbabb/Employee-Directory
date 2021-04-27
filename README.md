# Employee Directory

https://verusbabb.github.io/Employee-Directory/

This app is built with React and provides users with a directory that displays basic information about all employees, including an image, name, email, and birthdate.  Users are able to search for employee by first name and sort employees by either name, email, or birthday.  For user convenience, email links are active.

## User Story
```
As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.
```
## Developer Challenge
This app was built from scratch (no starter code).  The developer challenges included:

 * Accessing a public API to get random employee data (https://randomuser.me).
 * Building components to render different elements to the screen.  
    * App.js: main component that defines state, calls the api, and defines functions that manipulate the data based on user interactions
    * Table.js: renders the empty table with click events methods to call functions in App.js, and calls the Tablebody component.
    * TableBody.js: renders the data in the table
    * Form.js: renders a form for searching by employee first name with click event methods calling back to functions in App.js.

## App Sceenshots

