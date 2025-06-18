import { useEffect, useState } from "react";
import { useBookHook } from "./BookContext";
import { useLoggerHook } from "./LoggerContext";

const BookList = () => {
  const { books, addBook, removeBook } = useBookHook();
  const { log } = useLoggerHook();

  const handleAddBook = (title, author) => {
    addBook(title, author);
    log(`Book added: ${title} by ${author}`);
  };

  const handleRemoveBook = (title) => {
    removeBook(title);
    log(`Book removed: ${title}`);
  };

  useEffect(() => {
    handleAddBook("1984", "George Orwell");
    handleAddBook("To Kill a Mockingbird", "Harper Lee");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <AddBookForm onAdd={handleAddBook} />
      <ul>
        {books.map((b, i) => (
          <li key={i}>
            {b.title} by {b.author}
            <button onClick={() => handleRemoveBook(b.title)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (title && author) {
      onAdd(title, author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <button>Add Book</button>
    </form>
  );
};

export default BookList;
