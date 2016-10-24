const Book = require('../models/Book');
const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/books': async(ctx, next) => {
        console.log(ctx.request.query);
        ctx.rest({
            books: Book.getBooks()
        });
    },

    'GET /api/book/:id': async(ctx, next) => {
        var b = Book.getBook(ctx.params.id);
        if (b) {
            ctx.rest(b);
        } else {
            throw new APIError('book:not_found', 'book not found by id');
        }
    },

    'POST /api/book': async(ctx, next) => {
        var body = ctx.body;
        console.log(body);
        var b = Book.createBook(body.title, body.author, body.chapter);
        ctx.rest(b);
    },

    'DELETE /api/book/:id': async(ctx, next) => {
        var b = Book.deleteBook(ctx.params.id);
        if (b) {
            ctx.rest(b);
        } else {
            throw new APIError('book:not_found', 'book not found by id');
        }
    }
};
//ctx.params   /:id  path 
//ctx.request.query  ?id=id query
//ctx.request.body body