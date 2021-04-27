describe('Bounty', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty-work]').should('be.visible')
        cy.get('[data-cy=bounty-work-image]').should('be.visible')
        cy.get('[data-cy=bounty-work-title]').should('be.visible')
    })
})