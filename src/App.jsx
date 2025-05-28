import { useState } from 'react'
import './App.css'
import { LoggerProvider } from './files/LoggerContext'
import { BookProvider } from './files/BookContext'
import BookList from './files/BookList'

function App() {

  return (
    <LoggerProvider>
      <BookProvider>
        <BookList/>
      </BookProvider>
    </LoggerProvider>
  )
}

export default App
