import React from 'react'
import './Admin.css'

export default function Admin() {
    document.title = 'Admin';
    return (
        <div className="admin-panel" >
            <h1>Admin</h1>

            <form>
                <select>
                    <option>Array</option>
                    <option>LinkedList</option>
                    <option>Stack & Queues</option>
                    <option>String</option>
                    <option>Recursion</option>
                    <option>Backtracking</option>
                    <option>Binary Tree</option>
                    <option>Binary Search Tree</option>
                    <option>HashMap</option>
                    <option>Heap</option>
                    <option>Graph</option>
                    <option>Dynamic programming</option>
                </select>

                <input type="text" placeholder="Question"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
