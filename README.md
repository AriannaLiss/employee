# CRUD application: React, Routing, Material UI, Cypress.

##Application for managing a list of employees: adding and sorting. 

The application is written in React and tested by Cypress.
It displays Employee information, that is given in a JSON file. 
It contains a `Dashboard` page and an `Add Employee Form` page. 

The `Dashboard` page does the following:

- Displays employee information in a table
- Allows sorting all table columns in ascending and descending order
- Loads application data from the supplied JSON file
- Contains an `Add Employee` button, which navigates to the `Add Employee Form` page
- Updates the employee table after adding a new employee

## Example Test Cases:

- I can build the project and run the application as per instructions given
- I can run a test suite against the project
- I can directly navigate to the `Dashboard` page or `Add Employee Form` page
- Navigating to the `Dashboard` page should show a loading indicator until it loads the data (hint: Use Network Throttling in Dev Tools)
- I can enter information in the `Add Employee Form` page and have it handle input validation
- After adding a new employee, I should see it in the `Dashboard` page table
  etc.
