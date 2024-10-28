import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Book Management Dashboard</h1>
            <Link to="/add">Add Book</Link>
            <Link to="/">View Books</Link>
        </div>
    );
};

export default Dashboard;
