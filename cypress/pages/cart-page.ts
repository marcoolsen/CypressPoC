let prices: any = []
let price: number = 0

class CartPage {
    elements = {
        titlePage: () => cy.get('.title'),
        allProducts: () => cy.get('.cart_list > .cart_item'),
        checkoutBtn: () => cy.get('#checkout'),
    }

    getPrice() {
        this.elements.allProducts().each((item: any) => {
            cy.get(item.find('.inventory_item_price'))
                .invoke('text')
                .then((resp) => {
                    price = Number(resp.replace('$', ''))
                    prices.push(price)
                })
        })
        return prices
    }
}

export const cartPage = new CartPage()
