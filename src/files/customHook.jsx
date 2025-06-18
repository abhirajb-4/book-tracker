import { useContext } from "react";
import { BookContext } from "./BookContext";
import { LoggerContext } from "./LoggerContext";

export const useBookHook = () => useContext(BookContext);

export const useLoggerHook = () => useContext(LoggerContext);

export const userSearchHook = (books) => {
  return (query) => books.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) || 
    book.author.toLowerCase().includes(query.toLowerCase())
  );
};
