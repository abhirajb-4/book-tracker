import React,{ createContext, useContext, useState } from "react";


const BookContext = createContext();


export const BookProvider =({ children }) =>{
    const [books,setBooks] = useState([]);

    const addBook = (book) =>{
        if(!book.title || !book.author){
            return;
        }
        setBooks([...books,book])
    }

    const removeBook = (title) =>{
        setBooks((prev) => prev.filter((book) => book.title !== title));
    };

    return (
        <BookContext.Provider value={{books, addBook , removeBook }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookHook = ()=> useContext(BookContext);