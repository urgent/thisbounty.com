describe('Bounty', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty]').should('be.visible')
    })
})