import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
        published_year: ''
    });

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/books/${id}`);
            setBook(response.data);
        };
        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/books/${id}`, book);
        navigate('/'); // Redirect after update
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={book.description} onChange={handleChange} />
            <input type="number" name="published_year" placeholder="Published Year" value={book.published_year} onChange={handleChange} required />
            <button type="submit">Update Book</button>
        </form>
    );
};

export default EditBook;
