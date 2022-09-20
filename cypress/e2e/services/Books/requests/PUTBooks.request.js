

const payloadAddBook = require('../payloads/add-books.json')

function updateBook(idBook) {
    
    return cy.request({

        method: 'PUT',
        url: `Books/${idBook}`,
        headers:{
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadAddBook.Title('Outro livro')


    })
}

export{ updateBook }