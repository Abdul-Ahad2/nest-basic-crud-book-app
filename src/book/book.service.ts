import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    public books: Book[] = [];
    public id: number = 1;

    getBookService(): Book[] {
        return this.books;
    }

    addBookService(book: Book): string {
        book.title = book.title+this.id
        book.id = this.id++;
        this.books.push(book);
        return "Book has been added";
    }
    
    updateBookService(book: Book, id: number): string {
        let index = this.books.findIndex(book => book.id == id);
        book.id = Number(id);
        this.books[index] = book;
        return "book has been updated";
    }

    deleteBookService(id: number): string {
        this.books = this.books.filter((book) => {
            return book.id != id
        });
        return "Book has been deleted";
    }

}
