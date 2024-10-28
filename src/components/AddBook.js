import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [published_year, setPublishedYear] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/books', {
            title,
            author,
            description,
            published_year,
        });
        // Clear fields after submission
        setTitle('');
        setAuthor('');
        setDescription('');
        setPublishedYear('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Published Year" value={published_year} onChange={(e) => setPublishedYear(e.target.value)} required />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
