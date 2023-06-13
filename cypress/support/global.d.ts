declare namespace Cypress {
    interface Chainable {
        sharePostMethod(url: string, body: object): Chainable<Response>
        shareGetMethod(url: string): Chainable<Response>
        shareDeleteMethod(url: string): Chainable<Response>
        loginWeb(): Chainable<Element>
    }
}
