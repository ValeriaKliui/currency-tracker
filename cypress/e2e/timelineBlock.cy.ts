import { formatDate } from '../../src/utils/formatDate';
describe('timeline periods', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/timeline');
    });
    it('should suggest start and end period if user clicked on period button', () => {
        cy.get('[data-cy=period]').click();
        cy.get('[data-cy=history-date-start]').should('be.visible');
        cy.get('[data-cy=history-date-end]')
            .should('be.visible')
            .should('have.value', formatDate(new Date()));
    });
});

describe('timeline chart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/timeline');
    });
    it('should build timeline chart for month', () => {
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]').first().click();
        cy.get('[data-cy=timeline-chart]').should('be.visible');
    });
    it('should build timeline chart for choosen period', () => {
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]').first().click();
        cy.get('[data-cy=period]').click();
        cy.get('[data-cy=history-date-start]').type(
            formatDate(new Date().setMonth(new Date().getMonth() - 2)),
        );
        cy.get('[data-cy=timeline-chart]').should('be.visible');
    });
});
describe('timeline popup', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/timeline');
    });
    it('pop up should appear if chart for 1 month was successfully build', () => {
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]').first().click();
        cy.get('[data-cy=timeline-popup]').should('be.visible');
    });
    it('pop up should unmount after 3000ms', () => {
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]').first().click();
        cy.get('[data-cy=timeline-popup]').should('be.visible');
        cy.wait(3000);
        cy.get('[data-cy=timeline-popup]').should('not.exist');
    });
});
describe('timeline canvas', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/timeline');
        cy.get('[data-cy=currency-selector]').click();
        cy.get('[data-cy=currency-option]').first().click();
    });
    it('should build daily bars for month', () => {
        cy.wait(3000);
        cy.get('[data-cy=timeline-chart]').matchImageSnapshot();
    });
});
