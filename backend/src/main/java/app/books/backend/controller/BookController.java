package app.books.backend.controller;

import app.books.backend.model.Book;
import app.books.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/book/{id}")
    public Book getBookById(@PathVariable("id") Long id) {
        return bookService.getBookById(id);
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @PostMapping("/add")
    public String addBook(@RequestBody Book book) {
        bookService.addBook(book);
        return "Book added!";
    }

    @PutMapping("/update/{id}")
    public String updateBook(@PathVariable("id") Long id, @RequestBody Book book) {
        bookService.updateBook(id, book);
        return "Book updated!";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBook(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
        return "Book deleted!";
    }

}
