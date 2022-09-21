import  * as PUTBooks from '../requests/PUTBooks.request'
import  * as GETBooks from '../requests/GETBooks.request'
import  * as POSTBooks from '../requests/POSTooks.request'


describe('PUT Books', () => {

    it('Alterar um livro', () => {
        
        GETBooks.allBooks().then((resAllBooks)=>{
            PUTBooks.updateBook(resAllBooks.body[0].ID).should((resUpdateBook)=>{

                expect(resUpdateBook.status).to.eq(200)
                expect(resUpdateBook.body).to.be.not.null
                expect(resUpdateBook.body.Titlte).to.be.eq('Livro 2')
            })

        })
        
    });

    it('Criar e alterar um livro', () => {
        
    });
});