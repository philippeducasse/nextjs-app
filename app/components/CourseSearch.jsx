'use client';

import { useState } from "react";

import React from 'react'
const CourseSearch = ({getSearchResults}) => {
    const [query, setQuery] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const res = await fetch(`/api/courses/search?query=${query}`);
        const courses = await res.json();
        getSearchResults(courses)
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" className="search-input" placeholder="Search Courses" value={query}
                onChange={(e) => setQuery(e.target.value)}>
            </input>
            <button className="search-button" type='submit'>Search</button>
        </form>
    )
}

export default CourseSearch