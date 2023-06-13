//The idea is to use these generic methods to call APIs, reusing the same logic and making endpoints and parameters variables.

Cypress.Commands.add('shareGetMethod', (url: string) => {
    return cy.request({
        url: `${Cypress.env('urlAPI')}${url}`,
        method: 'GET',
        /* using bearer token
            auth : {
                bearer : 'token here'
            }
            */
    })
})

Cypress.Commands.add('sharePostMethod', (url: string, body: object) => {
    return cy.request({
        url: `${Cypress.env('urlAPI')}${url}`,
        method: 'POST',
        /* using bearer token
            auth : {
                bearer : 'token here'
            }
            */
        body: body,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('shareDeleteMethod', (url: string) => {
    return cy.request({
        url: `${Cypress.env('urlAPI')}${url}`,
        method: 'DELETE',
        /* using bearer token
            auth : {
                bearer : 'token here'
            }
            */
    })
})
