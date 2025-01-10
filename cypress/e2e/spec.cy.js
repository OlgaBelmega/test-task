describe('Check adding the products to the Cart', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
 
  })

  it('should add products to the cart and remore it', () => {
    cy.contains('GREENKART').should('be.visible')
    cy.url().should('include', '/seleniumPractise/#/')

    cy.get('.search-keyword')
      .type('ro')
    
      cy.contains('.product-name', 'Carrot')
      .parent()
      .find('.stepper-input > .quantity')
      .clear()
      .type('5')

      cy.contains('.product-name', 'Mushroom')
      .parent()
      .find('.stepper-input > .increment')
      .click()
      .click()

    
      cy.contains('.product-name', 'Mushroom')
      .parent()
      .find('.stepper-input > .quantity')
      .should('have.value', '3')

      cy.contains('.product-name', 'Carrot')
      .parent()
      .find('button[type="button"]')
      .click(); 

      cy.contains('.product-name', 'Mushroom')
      .parent()
      .find('button[type="button"]')
      .click();

      cy.get('.cart-icon').click();
      cy.contains('Carrot').should('exist'); 
      cy.contains('Mushroom').should('exist'); 
  

      cy.get('.product-remove') 
      .first() 
      .click();  

      cy.contains('.cart-items', 'Carrot')
      .should('not.exist');
})
 })

