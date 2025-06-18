import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    setBooks(prev => {
    const exists = prev.some(b => b.title === title && b.author === author);
    if (exists) return prev;
    return [...prev, { title, author }];
  });
  };

  const removeBook = (title) => {
    setBooks(prev => prev.filter(book => book.title !== title));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookHook = () => useContext(BookContext);
