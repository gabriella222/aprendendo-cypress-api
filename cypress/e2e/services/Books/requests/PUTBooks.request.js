

const payloadUpdateBook = require('../payloads/update-books.json')

function updateBook(idBook) {
    
    return cy.request({

        method: 'PUT',
        url: `Books/${idBook}`,
        headers:{
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadUpdateBook

    })
}

export{ updateBook }