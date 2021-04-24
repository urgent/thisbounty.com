describe('Nav', () => {
    it('Nav exists on homepage', () => {
        cy.visit('/')
        cy.get('[data-cy=nav]').should('be.visible').click()
    })
})