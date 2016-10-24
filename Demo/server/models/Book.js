var id = 0;

function nextId() {
    id++;
    return 'p' + id;
}

function Book(title, author, chapter) {
    this.id = nextId();
    this.title = title;
    this.author = author;
    this.chapter = chapter;
}

var books = [
    new Book('Effective Objective-C 2.0', 'Matt Galloway', '7'),
    new Book('iOS CORE ANIMATION', 'Nick Lockwood', '17'),
    new Book('JavaScript for Web Developers', 'Nicholas', '25'),
    new Book('Functional Programming in Swift', 'objc.io', '10'),
    new Book('Programming Ruby', 'Dave Thomas', '28'),
    new Book('明朝那些事儿', '当前明月', '7册'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),
    new Book('111', '111', '111'),

];

module.exports = {
    getBooks: () => {
        return books;
    },
    getBook: (id) => {
        var i;
        for (i = 0; i < books.length; ++i) {
            if (books[i].id === id) {
                return books[i];
            }
        }
        return null;
    },
    createBook: (title, author, chapter) => {
        var b = new Book(title, author, chapter);
        books.push(b);
        return b;
    },
    deleteBook: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            return books.splice(index, 1)[0];
        }
        return null;
    }
};