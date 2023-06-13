class PlacePage {
    elements = {
        allElementsTable: () => cy.get(`main table tbody`),
        latMap: () => cy.get(`#latlongmap`),
        satMap: () => cy.get(`#mapSatellite`),
    }

    selectLastPlace() {
        this.elements.allElementsTable().last().find('a').last().click()
    }

    reviewInfoPlace() {
        this.elements.latMap().should('be.visible')
        this.elements.satMap().should('be.visible')
    }
}
export const placePage = new PlacePage()
