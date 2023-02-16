package app.books.backend.service;
import app.books.backend.model.Book;
import java.util.List;

public interface BookService {

    Book getBookById(Long id);

    List<Book> getBooks();

    Book addBook(Book book);

    Book updateBook(Long id, Book book);

    void deleteBook(Long id);
}
