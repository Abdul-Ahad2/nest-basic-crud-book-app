import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor( private bookService: BookService){}
    @Get("/get")
    getBooks(){
        return this.bookService.getBookService(); 
    }

    @Post("/add")
    addBook(@Body() book: Book){
        return this.bookService.addBookService(book);
    }

    @Put("/update/:id")
    updateBook(@Body() book: Book, @Param("id") id: number){
        return this.bookService.updateBookService(book, id);
    }

    @Delete("/delete/:id") 
    deleteBook(@Param("id") id: number){
        return this.bookService.deleteBookService(id);
    }


}
