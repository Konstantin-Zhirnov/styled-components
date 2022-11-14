describe('APP E2E', () => {
  it('should have a link', () => {
    cy.visit('/')

    cy.get('a').should('have.text', 'Where is the world?')
  })

  it('should change theme', () => {
    cy.get('body[data-theme="light"]')
    cy.get('button[id="theme-button"]').click()
    cy.get('body[data-theme="dark"]')
  })

  it('should filtered country', () => {
    cy.get('input[name="search"]').type('American').should('have.value', 'American')
    cy.get('article h3').should('have.text', 'American Samoa')
    cy.get('article').should('have.length', 1)
    cy.get('input[name="search"]').clear()
    cy.contains('Filter by Region').click()
    cy.contains('Oceania').click()
    cy.get('article').should('have.length', 27)
    cy.get('input[name="search"]').type('New').should('have.value', 'New')
    cy.get('article').should('have.length', 3)
  })
})
