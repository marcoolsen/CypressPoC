class InventoryPage {
    elements = {
        burgerMenuBar: () => cy.get(`#react-burger-menu-btn`),
        inventoryItemList: () => cy.get('.inventory_list'),
        cartBtn: () => cy.get(`#shopping_cart_container`),
    }

    addItemsToCart(quantity: number) {
        this.itemCount().then((total) => {
            if (total < quantity) {
                throw new Error('quantity is greater than articles per page')
            } else {
                let counter = 0
                this.elements
                    .inventoryItemList()
                    .find('div.inventory_item')
                    .each((item) => {
                        item.find('button').trigger('click')
                        counter = counter + 1
                        if (counter === quantity) {
                            return false
                        }
                    })
            }
        })
    }

    itemCount() {
        return this.elements
            .inventoryItemList()
            .find('div.inventory_item')
            .its('length')
    }
}
export const inventoryPage = new InventoryPage()
