class LoginPage {
    elements = {
        titlePage: () => cy.get(`.login_logo`),
        userNameField: () => cy.get(`[data-test='username']`),
        passwordField: () => cy.get(`[data-test='password']`),
        loginBtn: () => cy.get(`[data-test='login-button']`),
    }

    doInternalLogin() {
        this.elements.userNameField().type(Cypress.env('TEST_USER'))
        this.elements.passwordField().type(Cypress.env('TEST_PASS'))
        this.elements.loginBtn().click()
    }

    doLoginWithExternalCredentials(user: string, password: string) {
        this.elements.userNameField().type(user)
        this.elements.passwordField().type(password)
        this.elements.loginBtn().click()
    }
}
export const loginPage = new LoginPage()
