import Square from "../../src/Square/Square";

describe('Board test', () => {
    it('Winner declared', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="square"]').eq(0).click();
        cy.get('[data-testid="square"]').eq(3).click();//O
        cy.get('[data-testid="square"]').eq(1).click();
        cy.get('[data-testid="square"]').eq(4).click();
        cy.get('[data-testid="square"]').eq(2).click();
        cy.get('[data-testid="status"]').contains("Winner: X")
    });

    it("alternates X and O",()=>{
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="square"]').eq(0).click();
        cy.get('[data-testid="square"]').eq(0).contains("X");
        cy.get('[data-testid="square"]').eq(3).click();//O
        cy.get('[data-testid="square"]').eq(3).contains("O");
    });

    it("disables a clicked button",()=>{
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="square"]').eq(0).click();
        cy.get('[data-testid="square"]').eq(0).contains("X");
        cy.get('[data-testid="square"]').eq(0).click();//O
        cy.get('[data-testid="square"]').eq(0).contains("X");
    })
});