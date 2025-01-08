describe('Check adding the products to the Cart', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
 
  })

  it('should add products to the cart and remore it', () => {
    cy.contains('GREENKART').should('be.visible')
    cy.url().should('include', '/seleniumPractise/#/')

    cy.get('.search-keyword')
      .type('ro')
    
      cy.get(':nth-child(3) > .stepper-input > .quantity')
      .clear() 
      .type('5')
      .should('have.value', '5')
      cy.get(':nth-child(4) > .stepper-input > .increment')
      .click()  
      .click() 

      cy.get(':nth-child(4) > .stepper-input > .quantity')
      .should('have.value', '3')

      cy.get(':nth-child(3) > .product-action > button').click()
      cy.get(':nth-child(4) > .product-action > button').click()

      cy.get(':nth-child(1) > :nth-child(3) > strong') 
      .should('have.text', '2');
      cy.get('.cart-icon').click();

      cy.get('.product-remove') 
      .first() 
      .click();  

      cy.contains('.cart-items', 'Carrot')
      .should('not.exist');
})
 })

