class LoginPage {
    elements = {
        subTitlePage: () => cy.get(`main h3`),
        emailInput: () => cy.get(`#email`),
        passInput: () => cy.get(`#password1`),
        loginBtn: () => cy.get(`.button[title='Login']`),
    }

    doLogin() {
        this.elements.subTitlePage().should('be.visible')
        this.elements
            .emailInput()
            .should('be.visible')
            .type(Cypress.env('user'))
        this.elements.passInput().should('be.visible').type(Cypress.env('pass'))
        this.elements.loginBtn().click()
        cy.get(`a[href='profile']`).should('be.visible')
    }
}
export const loginPage = new LoginPage()
