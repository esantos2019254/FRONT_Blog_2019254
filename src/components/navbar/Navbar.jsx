import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-purple-950"> {/* Cambiar aquí */}
                <div className="flex-1 mx-10">
                    <Link className="btn btn-ghost text-xl font-bold text-white">My Blog</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-10">
                        <li>
                            <Link to="/" className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts" className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold text-white">Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}