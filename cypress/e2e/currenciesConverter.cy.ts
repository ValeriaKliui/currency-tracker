describe('currencies converter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should open converter after click', () => {
        // cy.get('selector').as('selector');
        // cy.get('selector').click();
        cy.get('[data-testid=currency-item').last().click();
    });
});
