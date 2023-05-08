describe('Task Page', () => {
    it.only('ADD Task Successfully ', () => {
        window.localStorage.removeItem('token')
        cy.login()
        cy.visit("/")
      
        cy.getByData('title').type('ABTask')
        cy.getByData('duration').type('12')
        cy.getByData('addTask').click()
        cy.visit("/")
        cy.getByData('task learnABTask').should('exist')
      
       
      
        })
  })