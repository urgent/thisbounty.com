describe('Auth', () => {
    it('Logs in with Github', () => {
        cy.visit('/')
        cy.get('[data-cy=signIn]').should('be.visible').click()
        // need assertion to wait for page
        cy.location('pathname', { timeout: 10000 }).should('include', '/api/auth/');
        cy.get('button').should('be.visible')
    })
})