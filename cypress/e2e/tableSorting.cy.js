import '../support/commands.js'
import '../support'
import { ROWS_AMOUNT } from "../support/consts";
import { checkEmployeesPage, isSortingArrowVisible, isTableColumnSorted } from "../support/functions";

describe('Verify sorting in employees table', () => {

    beforeEach(()=>{
        cy.visit('/');
        checkEmployeesPage();
        cy.getBySel('employeeTable').find('tr').should('have.length',ROWS_AMOUNT);
    });
  
    
    it('Sort ascending by name', () => {
        
        isSortingArrowVisible('name',false)
        cy.getColumnAsArray('name').then($arr=>expect($arr).to.not.be.sorted());   

        cy.getBySel('table-head-name-asc').click();
        
        isSortingArrowVisible('name',true)
        cy.getColumnAsArray('name').then($arr=>expect($arr).to.be.sorted());  
    });
    
    
    it('Descending sort by jobTitle', () => {
        
        isSortingArrowVisible('jobTitle',false)
        cy.getColumnAsArray('jobTitle').then($arr=>expect($arr).to.not.be.sorted());   
        
        cy.getBySel('table-head-jobTitle-asc').click();
        
        isSortingArrowVisible('jobTitle',true)
        cy.getColumnAsArray('jobTitle').then($arr=>expect($arr).to.be.sorted());   

        cy.getBySel('table-head-jobTitle-asc').click();
        
        isSortingArrowVisible('jobTitle',true)
        cy.getColumnAsArray('jobTitle').then($arr=>expect($arr).to.be.sorted({descending:true}));  
    });

        
    it('Sort digit column - tenure', () => {
        
        isSortingArrowVisible('tenure',false)
        cy.getColumnAsArray('tenure').then($arr=>expect($arr).to.not.be.sorted());   

        cy.getBySel('table-head-tenure-asc').click();
        
        isSortingArrowVisible('tenure',true)
        cy.getColumnAsArray('tenure').then($arr=>{
            const $numArr = $arr.map(el=>parseInt(el))
            expect($numArr).to.be.sorted()
        });  
    });
});
