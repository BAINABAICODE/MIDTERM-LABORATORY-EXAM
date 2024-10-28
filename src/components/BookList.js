// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookTable from './BookTable';


const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/api/books/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setBooks(books.filter(book => book.id !== id));
        });
    };

    return (
        <div>
            <h2 style={{ color: '#FF6A00' }}>Books</h2>
            <Link to="/add">
                <button>Add Book</button>
            </Link>
            <BookTable books={books} handleDelete={handleDelete} />
        </div>
    );
};

export default BookList;
