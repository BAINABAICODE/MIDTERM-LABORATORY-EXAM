// src/components/BookTable.js
import React from 'react';
import { Link } from 'react-router-dom';


const BookTable = ({ books, handleDelete }) => {
    return (
        <table className="book-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>
                            <div className="book-actions">
                                <Link to={`/edit/${book.id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(book.id)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookTable;
