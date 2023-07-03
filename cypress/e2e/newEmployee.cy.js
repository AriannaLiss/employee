import '../support/commands.js'
import { ROWS_AMOUNT } from '../support/consts.js';
import { checkEmployeeCreatePage, checkEmployeesPage, fillEmployee, shouldContainEmployee } from '../support/functions.js';


describe('Add new employee', () => {

  beforeEach(()=>{
      cy.visit('/');
      checkEmployeesPage();
      cy.getBySel('employeeTable').find('tr').should('have.length',ROWS_AMOUNT);
    }
  );

  
  it('Add a new emplyee and check it in the table', () => {

    cy.getBySel('employeeTable').should('not.contain','Lidiia');
    
    cy.getBySel('addNewEmployee').click();
    checkEmployeeCreatePage();
    
    fillEmployee();
    
    cy.getBySel('submit').click();
    checkEmployeesPage();
    
    cy.getBySel('employeeTable').find('tr').should('have.length',ROWS_AMOUNT+1);

    shouldContainEmployee();
  });


  it('Verify adding an existing emplyee', () => {

    const existingName='Tom Connor';

    cy.getBySel('employeeTable').should('contain', existingName);
    
    cy.getBySel('addNewEmployee').click();
    checkEmployeeCreatePage();
    
    fillEmployee(existingName);
    
    cy.getBySel('submit').click();
    checkEmployeeCreatePage();

    cy.getBySel('name').get('#name-helper-text');
    cy.get('#name-helper-text').contains("User with name 'Tom Connor' already exists.")   
  });


  it('Verify adding empty employee and check it in the table', () => {

    cy.getBySel('addNewEmployee').click();
    checkEmployeeCreatePage();
    
    cy.getBySel('submit').click();
    checkEmployeeCreatePage();

    cy.getBySel('name').get('#name-helper-text');
    cy.get('#name-helper-text').contains("This field shouldn't be empty.")   

    cy.getBySel('jobTitle').get('#jobTitle-helper-text');
    cy.get('#name-helper-text').contains("This field shouldn't be empty.")   
  });


  it('Cancel adding a new emplyee and check if it is not in the table', () => {

    cy.getBySel('employeeTable').should('not.contain','Lidiia');
    
    cy.getBySel('addNewEmployee').click();
    checkEmployeeCreatePage();
    
    fillEmployee();
    
    cy.getBySel('cancel').click();
    checkEmployeesPage();
    
    cy.getBySel('employeeTable').find('tr').should('have.length',ROWS_AMOUNT);

    cy.getBySel('employeeTable').should('not.contain','Lidiia');
  });
});
