describe('Homepage', () => {
    it('Homepage exists', () => {
        cy.visit('/')
        cy.get('body').should('be.visible')
        cy.get('[data-cy=grid]').should('be.visible')
    })
})