import * as DELETEBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'


describe('DELETE Books', () => {

    it('Apagando livros', () => {
        
        GETBooks.allBooks().then((resAllBooks)=>{
            DELETEBooks.deleteBook(resAllBooks.body[0].ID).should((resDeleteBook)=>{

                expect(resDeleteBook.status).to.eq(200)

            })

        })

    });
    it('Criar e excluir um livro', () => {

        POSTBooks.addBook().then((resAddBooks)=>{
            DELETEBooks.deleteBook(resAddBooks.body.ID).should((resDeleteBook)=>{

                expect(resDeleteBook.status).to.eq(200)
            })
        })
        
    });
});