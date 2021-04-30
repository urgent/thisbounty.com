describe('Bounty', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty-work]').should('be.visible')
        cy.get('[data-cy=bounty-work-image]').should('be.visible')
        cy.get('[data-cy=bounty-work-title]').should('be.visible')
    })
    it('navigates', () => {
        cy.visit('/bounty/work')
        cy.get('[data-cy=bounty-thisbounty]').should('be.visible')
        cy.get('[data-cy=bounty-thisbounty-image]').should('be.visible')
        cy.get('[data-cy=bounty-thisbounty-title]').should('be.visible')
    })
})