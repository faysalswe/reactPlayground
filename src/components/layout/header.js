import React from 'react'
import { Link } from 'react-router-dom'
// why importing bracket
export default function Header() {
    return (
        <header className="breadcrumb" >
            <h1>Todo List</h1>
            <hr />
            <div>
                <Link to="/"> Home </Link> | <Link to="/about"> About </Link>
            </div>
        </header>
    )
}