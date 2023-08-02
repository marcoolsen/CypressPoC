class InformationPage {
    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name,[name="lastName"]'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('#continue'),
    }

    typeSubmitCheckoutInfo(userData: {
        name: string
        lastName: string
        postalCode: number
    }) {
        this.elements.firstNameInput().type(userData.name)
        this.elements.lastNameInput().type(userData.lastName)
        this.elements.postalCodeInput().type(userData.postalCode.toString())
        this.elements.continueBtn().click()
    }
}

export const informationPage = new InformationPage()
