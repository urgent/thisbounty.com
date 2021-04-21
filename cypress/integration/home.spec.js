describe('Homepage', () => {
    it('Homepage exists', () => {
        cy.visit('/')
        cy.get('body').should('be.visible')
    })
})