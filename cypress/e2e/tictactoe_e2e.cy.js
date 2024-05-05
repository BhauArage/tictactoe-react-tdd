describe('Board test', () => {
    it('plays X O in square', () => {
        cy.visit('http://localhost:3000');
        cy.get('.square').eq(0).click();
        cy.get('.square').eq(1).click();
        cy.get('.square').eq(5).click();

    //     cy.get('[data-testid="square1"]')
    //         .click();

    //     cy.get('[data-testid="square1"]')
    //         .should('have.value', 'X');

    });
});