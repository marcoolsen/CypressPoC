import endpoints from '../../fixtures/urls.json'
import { bookInterface } from '../../support/interfaces/book-interface'
import { randomString, randomIntFromInterval } from '../../support/helper'
import data from '../../fixtures/dataForTesting.json'

const getAllBooks: string = endpoints.api.getBooks
const insertAccountUser: string = endpoints.api.InsertAccountUser
const authorizedUser: string = endpoints.api.authorizedUser
const iteams: number = 5
const regexDate = /\d{4}-\d{2}-\d{2}/
const regexUrl =
    /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/
const minNum: number = 1
const maxNum: number = 1000000
const pass: string = randomString()
const userName = `test${randomIntFromInterval(minNum, maxNum)}`
let userID: string
const badPass = data.api.wrongPassword

describe('Test Suite about API Automation - using https://demoqa.com/swagger/', () => {
    it(`Get All Books API - Review at least ${iteams} ramdon books`, () => {
        cy.shareGetMethod(getAllBooks).then((books) => {
            //general validations
            expect(books.status).eq(200)
            expect(books.statusText).eq('OK')
            const obj = Object.assign(books)
            obj.body.books.every((data: bookInterface, index: number) => {
                if (index >= iteams) {
                    return false
                }
                //payload validations; required fields
                expect(data.author).not.to.be.null
                expect(data.description).not.to.be.null
                expect(data.isbn).not.to.be.null
                expect(data.pages).not.to.be.null
                expect(data.publish_date).not.to.be.null
                expect(data.publisher).not.to.be.null
                expect(data.subTitle).not.to.be.null
                expect(data.title).not.to.be.null
                expect(data.website).not.to.be.null
                //specific format validations
                expect(data.publish_date).to.match(regexDate)
                expect(data.website).to.match(regexUrl)
                return true
            })
        })
    })

    it('Insert a new User and Authorize it', () => {
        cy.sharePostMethod(insertAccountUser, {
            userName: userName,
            password: pass,
        })
            .then((user) => {
                expect(user.status).eq(201)
                expect(user.body.userID).not.to.be.null
                expect(user.body.username).not.to.be.null
                //set uuid just in case I need it later
                userID = user.body.userID
            })
            .then(() => {
                //authorized user call
                cy.sharePostMethod(authorizedUser, {
                    userName: userName,
                    password: pass,
                }).then((authorized) => {
                    expect(authorized.status).eq(200)
                    expect(authorized.body).eq(false)
                })
            })
    })

    it('Negative Scenarios - Try to add a new user without complying with password policie', () => {
        cy.sharePostMethod(insertAccountUser, {
            userName: `test${randomIntFromInterval(minNum, maxNum)}`,
            password: badPass,
        }).then((response) => {
            //should send an error response
            expect(response.status).eq(400)
            expect(response.body.code).eq(data.api.errorResponseCode)
            expect(response.body.message).eq(data.api.passErrorMsg)
        })
    })
})
