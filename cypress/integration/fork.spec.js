it('shows fork on New bounty', () => {
    cy.visit('/bounty/hire')
    cy.get('[data-cy=fork]').should('be.visible')
})