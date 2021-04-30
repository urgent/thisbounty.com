describe('Bounty', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty-work]').should('be.visible')
        cy.get('[data-cy=bounty-work-image]').should('be.visible')
        cy.get('[data-cy=bounty-work-title]').should('be.visible')
    })
    it('navigates', () => {
        cy.visit('/bounty/work')
        cy.get('[data-cy=bounty-setup]').should('be.visible')
        cy.get('[data-cy=bounty-setup-image]').should('be.visible')
        cy.get('[data-cy=bounty-setup-title]').should('be.visible')
    })
})