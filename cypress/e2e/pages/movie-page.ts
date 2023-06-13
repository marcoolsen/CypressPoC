class MoviePage {
    elements = {
        allLocations: () => cy.get(`.locationdiv`),
        mapLocation: () => cy.get(`#mapid`),
    }

    selectFirstLocation() {
        this.elements.allLocations().first().click()
    }
}
export const moviePage = new MoviePage()
