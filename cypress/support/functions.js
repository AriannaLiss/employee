export function fillEmployee(name='Lidiia', jobTitle='dev', tenure='1', gender='Female'){
    cy.getBySel('name').type(name);
        
    cy.getBySel('jobTitle').type(jobTitle);
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click()
    
    cy.getBySel('tenure').within(() => {
      cy.get(`span[data-index=${tenure}]`).click({force: true});
    });
    
    cy.getBySel('gender').click();
    
    cy.getBySelLike(gender).click();
  }
  
export function shouldContainEmployee(row = ['Lidiia', 'Developer', '1', 'Female']){
    cy.getBySel('employeeTable').should('contain',row[0]);
      
    cy.getBySel(`table-row-${row[0]}`).within(() => {
      row.map(data => 
      cy.contains(data)
      )
    }
    )
}


export function checkEmployeesPage(){
    cy.url().should('contain','employees');
    cy.url().should('not.contain','create');
    cy.contains('corporate employees');
    cy.getBySel('addNewEmployee');
    cy.getBySel('employeeTable');
}


export function checkEmployeeCreatePage(){
    cy.url().should('contain','/employees/create');
    cy.getBySel('name')
    cy.getBySel('jobTitle')
    cy.getBySel('tenure')
    cy.getBySel('gender')
    cy.getBySel('cancel')
    cy.getBySel('submit')
}
  
// export function isTableColumnSorted(columnName, isSorted){
//   cy.getBySel(`table-cell-${columnName}`).then($cells=>{
//     const $arr =Cypress._.map(
//         $cells,
//         ($cell) => $cell.innerText,
//       )
//     cy.log('arr',$arr)

//     isSorted
//       ? expect($arr).to.be.sorted()
//       : expect($arr).not.to.be.sorted();
//     });
// }

export function isSortingArrowVisible(columnName, isVisible=true){
  cy.getBySel(`table-head-${columnName}`).within(()=>
    isVisible
      ? cy.get('[data-testid="ArrowDownwardIcon"]').should('be.visible')
      : cy.get('[data-testid="ArrowDownwardIcon"]').should('not.be.visible')
  )
}
