import '../support/commands.js'
import { checkEmployeeCreatePage, checkEmployeesPage } from '../support/functions.js';

describe('Direct navigations to pages', () => {

    it('Should be loader',()=>{
      cy.visit('/');
      cy.getBySel('loader');
      checkEmployeesPage();
    });

    it('Direct visit employees page', ()=>{
      cy.visit('/employees');
      checkEmployeesPage();
    });
  
      
    it('Redirection to employees page from base url', ()=>{
      cy.visit('/');
      checkEmployeesPage();
    });
    
  
    it('Direct visit create employee page', ()=>{
      cy.visit('/employees/create');
      checkEmployeeCreatePage();
    });
});
  