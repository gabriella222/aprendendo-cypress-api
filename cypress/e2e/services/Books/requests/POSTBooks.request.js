
const payloadAddBook = require('../payloads/add-books.json')
function addBook() {

    return cy.request({

        method: 'POST',
        url: 'Books',
        failOnTheStatusCode: false,
        body: payloadAddBook

    })
    
}

export{addBook}