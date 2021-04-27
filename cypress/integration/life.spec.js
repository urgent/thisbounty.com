describe('Life', () => {
    it('shows on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=life]').should('be.visible')
    })
})