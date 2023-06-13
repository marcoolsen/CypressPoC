import { homePage } from '../e2e/pages/home-page'
import { loginPage } from '../e2e/pages/login-page'

Cypress.Commands.add('loginWeb', () => {
    cy.visit(Cypress.env('urlWeb'))
    homePage.moveToLoginPage()
    loginPage.doLogin()
})
