package app.books.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import app.books.backend.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
