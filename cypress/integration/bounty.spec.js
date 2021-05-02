describe('Bounty', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty-work]').should('be.visible')
        cy.get('[data-cy=bounty-work-image]').should('be.visible')
        cy.get('[data-cy=bounty-work-title]').should('be.visible')
        cy.get('[data-cy=back-work]').should('not.exist');
    })
    it('opens child route', () => {
        cy.visit('/bounty/work')
        cy.get('[data-cy=bounty-setup]').should('be.visible')
        cy.get('[data-cy=bounty-setup-image]').should('be.visible')
        cy.get('[data-cy=bounty-setup-title]').should('be.visible')
        cy.get('[data-cy=back-setup]').should('be.visible');
    })

    it('navigates', () => {
        cy.visit('/')
        cy.get('[data-cy=bounty-work-title]').click()
        // need assertion to wait for page
        cy.location('pathname', { timeout: 10000 }).should('include', '/bounty/work')
        cy.get('[data-cy=bounty-setup]').should('be.visible')
        cy.get('[data-cy=bounty-setup-image]').should('be.visible')
        cy.get('[data-cy=bounty-setup-title]').should('be.visible')
        cy.get('[data-cy=bounty-setup-title]').click()
        // need assertion to wait for page
        cy.location('pathname', { timeout: 10000 }).should('include', '/bounty/setup')
        cy.get('[data-cy=bounty-thisbounty]').should('be.visible')
        cy.get('[data-cy=bounty-thisbounty-image]').should('be.visible')
        cy.get('[data-cy=bounty-thisbounty-title]').should('be.visible')
        cy.get('[data-cy=back-thisbounty]').click()
        // going back
        // need assertion to wait for page
        cy.location('pathname', { timeout: 10000 }).should('include', '/bounty/work')
        cy.get('[data-cy=bounty-setup]').should('be.visible')
        cy.get('[data-cy=bounty-setup-image]').should('be.visible')
        cy.get('[data-cy=bounty-setup-title]').should('be.visible')
        cy.get('[data-cy=back-setup]').click()
        // going back
        // need assertion to wait for page
        cy.location('pathname', { timeout: 10000 }).should('include', '/')
        cy.get('[data-cy=bounty-work]').should('be.visible')
        cy.get('[data-cy=bounty-work-image]').should('be.visible')
        cy.get('[data-cy=bounty-work-title]').should('be.visible')
        cy.get('[data-cy=back-work]').should('not.exist');
    })
})