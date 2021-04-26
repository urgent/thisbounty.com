describe('Bounty', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty-work]').should('be.visible')
    })
})