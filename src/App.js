import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookList from './components/BookList';
import ViewBook from './components/ViewBook';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/add" element={<AddBook />} />
                <Route path="/edit/:id" element={<EditBook />} />
                <Route path="/books/:id" element={<ViewBook />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
