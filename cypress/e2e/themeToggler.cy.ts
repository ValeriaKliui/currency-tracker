import { darkTheme, lightTheme } from '../../src/constants/styles/theme';
describe('theme toggler', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('should change toggler id after click', () => {
        cy.get('[data-cy=theme-checkbox]').then(($toggler) => {
            const togglerInitID = $toggler[0].id;
            cy.get('[data-cy=theme-toggler]').click();
            cy.get('[data-cy=theme-checkbox]').should(
                'not.have.id',
                togglerInitID,
            );
            cy.get('[data-cy=theme-toggler]').click();
            cy.get('[data-cy=theme-checkbox]').should('have.id', togglerInitID);
        });
    });

    it('should change colors of elements', () => {
        cy.get('body').should(
            'have.css',
            'background-color',
            darkTheme.colors.background,
        );
        cy.get('p').should('have.css', 'color', darkTheme.colors.font);

        cy.get('[data-cy=theme-toggler]').click();

        cy.get('body').should(
            'have.css',
            'background-color',
            lightTheme.colors.background,
        );
    });
});
