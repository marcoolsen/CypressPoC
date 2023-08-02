class CompletePage {
    elements = {
        completeTitle: () => cy.get('.complete-header'),
    }
}

export const completePage = new CompletePage()
