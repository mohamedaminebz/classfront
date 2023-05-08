describe('login Page', () => {
    it.only('Connect as admin Successfully using token approach', () => {
        window.localStorage.removeItem('token')
        cy.visit("/")
        cy.login()
        cy.visit("/")
        cy.location('pathname').should('eq','/teachers/tasks')
       
      
        })
    it('Connect as admin Successfully', () => {
    window.localStorage.removeItem('token')
    cy.visit("/")
    cy.location('pathname').should('eq','/login')
    cy.getByData('email').type('yosrisamm1@gmail.com')
    cy.getByData('password').type('123456')
    cy.getByData('connect').click()
    cy.location('pathname').should('eq','/teachers/tasks')
    cy.visit('/hello')
    cy.get('.app').should('be.empty')
  
    })
    it('Connect as user Successfully', () => {
        window.localStorage.removeItem('token')
        cy.visit("/")
        cy.location('pathname').should('eq','/login')
        cy.getByData('email').type('user@gmail.com')
        cy.getByData('password').type('123456')
        cy.getByData('connect').click()
        cy.location('pathname').should('eq','/')
        cy.get('.app').should('not.empty')
  
      
        })
  })