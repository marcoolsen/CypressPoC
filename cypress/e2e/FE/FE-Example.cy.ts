import { homePage } from '../pages/home-page'
import { moviePage } from '../pages/movie-page'
import { placePage } from '../pages/places-page'

describe('Test Suite about Frontend Automation using - using https://www.latlong.net/', () => {
    beforeEach(() => {
        cy.loginWeb()
    })

    it('Go to Movie Locations, Select One Location and review the google maps is available', () => {
        console.log('test')
        homePage.moveToMovieTab()
        moviePage.selectFirstLocation()
        expect('h1').not.to.be.null
        expect(moviePage.elements.mapLocation).exist
    })

    it('Go to Places Section, Select the last place of the table and check the satelite map and the location map', () => {
        homePage.moveToPlacesTab()
        placePage.selectLastPlace()
        expect('h1').not.to.be.null
        placePage.reviewInfoPlace()
    })
})
