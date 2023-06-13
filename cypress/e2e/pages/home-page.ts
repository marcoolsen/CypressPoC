class HomePage {
    elements = {
        userLoginBtn: () => cy.get(`a[href='/user/login']`),
        movieTab: () => cy.get(`a[href='/movies-locations']`),
        placesTab: () => cy.get(`a[href='/latest-places.html']`),
    }

    moveToLoginPage() {
        this.elements.userLoginBtn().should('be.visible').click()
    }

    moveToMovieTab() {
        this.elements.movieTab().should('be.visible').click()
        cy.get('h1').contains('Movies Locations')
    }

    moveToPlacesTab() {
        this.elements.placesTab().should('be.visible').click()
        cy.get('h1').contains('The Latest Places with Lat Long')
    }
}
export const homePage = new HomePage()
