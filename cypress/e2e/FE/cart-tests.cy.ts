import { inventoryPage } from '../../pages/inventory-page'
import { cartPage } from '../../pages/cart-page'
import { informationPage } from '../../pages/checkout/information-page'
import { overviewPage } from '../../pages/checkout/overview-page'
import { completePage } from '../../pages/checkout/complete-page'

const quantity: number = 3
let prices = []
let expectedSubTotal: number = 0
let expectedTax: number = 0
let expectedTotal: number = 0
let subTotal = [] as any
let tax = [] as any
let total = [] as any

describe('Regression Testing - Cart Tests - Fronted Scenarios', () => {
    before(() => {
        cy.loginWeb()
    })

    it('Checkout Payment Process - Select items dynamically, check prices and total payment', () => {
        inventoryPage.addItemsToCart(quantity)
        cy.screenshot()
        inventoryPage.elements
            .cartBtn()
            .invoke('text')
            .then((resp) => {
                expect(resp).to.eq(quantity.toString())
            })
        inventoryPage.elements.cartBtn().click()
        cartPage.elements
            .titlePage()
            .should('be.visible')
            .and('contain.text', 'Your Cart')
        prices = cartPage.getPrice()
        cy.screenshot()
        cartPage.elements.checkoutBtn().click()
        cy.fixture('userInfo.json').then((res) => {
            informationPage.typeSubmitCheckoutInfo(res.userData)
        })
        cy.screenshot()
        cy.get(prices).each((itemPrice: number, index: number, list: any[]) => {
            expectedSubTotal += itemPrice
            if (index++ === list.length - 1) {
                overviewPage.elements
                    .subtotalTxt()
                    .invoke('text')
                    .then((res: string) => {
                        subTotal = res.match(/[\d\.]+/)
                        expect(expectedSubTotal).to.eq(parseFloat(subTotal[0]))
                    })
                overviewPage.elements
                    .taxTxt()
                    .invoke('text')
                    .then((res: string) => {
                        tax = res.match(/[\d\.]+/)
                        expectedTax = expectedSubTotal * 0.08
                        expect(Math.round(expectedTax * 100) / 100).to.eq(
                            parseFloat(tax[0])
                        )
                    })
                overviewPage.elements
                    .totalTxt()
                    .invoke('text')
                    .then((res: string) => {
                        total = res.match(/[\d\.]+/)
                        expectedTotal = expectedSubTotal + expectedTax
                        expect(
                            parseFloat(
                                (Math.round(expectedTotal * 100) / 100).toFixed(
                                    2
                                )
                            )
                        ).to.eq(parseFloat(total[0]))
                    })
            }
        })
        cy.screenshot()
        overviewPage.elements.finishBtn().click()
        completePage.elements
            .completeTitle()
            .should('be.visible')
            .and('contain.text', 'Thank you for your order!')
        cy.screenshot()
    })
})
