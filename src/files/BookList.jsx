import { useEffect, useState } from "react";
import { useBookHook } from "./BookContext";
import { useLoggerHook } from "./LoggerContext";

// Add Book Handler
const handleAddBookFactory = (addBook, log) => (title, author) => {
  if (!title || !author) return;
  addBook({ title, author });
  log(`Added book: ${title}`);
};

// Remove Book Handler
const handleRemoveBookFactory = (removeBook, log) => (title) => {
  removeBook(title);
  log(`Removed book: ${title}`);
};

const BookList = () => {
  const { books, addBook, removeBook } = useBookHook();
  const { log } = useLoggerHook();

  const handleAddBook = handleAddBookFactory(addBook, log);
  const handleRemoveBook = handleRemoveBookFactory(removeBook, log);

  useEffect(() => {
    // Add sample books on mount
    handleAddBook("1984", "George Orwell");
    handleAddBook("To Kill a Mockingbird", "Harper Lee");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <AddBookForm handleAddBook={handleAddBook} />
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <button onClick={() => handleRemoveBook(book.title)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddBookForm = ({ handleAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookList;
