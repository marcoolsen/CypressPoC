import { inventoryPage } from '../pages/inventory-page'
import { loginPage } from '../pages/login-page'

Cypress.Commands.add('loginWeb', () => {
    cy.visit('')
    // loginPage.elements.titlePage().should('be.visible').contains('Swag Labs')
    loginPage.doInternalLogin()
    inventoryPage.elements.burgerMenuBar().should('be.visible')
})
