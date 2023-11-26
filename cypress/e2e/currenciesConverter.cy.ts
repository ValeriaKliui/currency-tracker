describe('currencies converter opening/closing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('should open converter with choosen currency', () => {
        cy.get('[data-cy=currency-converter]').as('converter');
        cy.get('@converter').should('not.be.visible');
        cy.get('[data-cy=currency-item]').first().click();
        cy.get('@converter').should('be.visible');
    });
    it('should close converter after click outside', () => {
        cy.get('[data-cy=currency-converter]').as('converter');
        cy.get('body').click(0, 0);
        cy.get('@converter').should('not.be.visible');
    });
});

describe('testing converting', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=currency-item]').first().click();
    });
    it('should open currency selector with options and close after choosing currency', () => {
        cy.get('[data-cy=currency-option]').first().as('currency-option');
        cy.get('@currency-option').should('not.be.visible');
        cy.get('[data-cy=currency-selector]').as('selector');
        cy.get('@selector').click();
        cy.get('@currency-option')
            .should('be.visible')
            .click()
            .should('not.be.visible');
    });
    it('should change target currency after choosing', () => {
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]')
            .first()
            .click()
            .then(function ($elem) {
                cy.get('[data-cy=currency-choosen]').contains(
                    $elem.text().split(' ')[0],
                );
            });
    });
    it('should change converted amount after inputing amount', () => {
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]').first().click();
        cy.get('[data-cy=converter-amount]').type('213.2');
        cy.get('[data-cy=converted-amount]').contains('213.2');
    });
});
