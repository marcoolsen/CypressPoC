class OverviewPage {
    elements = {
        subtotalTxt: () => cy.get('.summary_subtotal_label'),
        taxTxt: () => cy.get('.summary_tax_label'),
        totalTxt: () => cy.get('.summary_total_label'),
        finishBtn: () => cy.get('#finish'),
    }
}

export const overviewPage = new OverviewPage()
