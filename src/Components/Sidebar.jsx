import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
    return (
        <>
            <div className="col-md-2 sidebar p-3 d-md-block d-none">
                <h4 className="mb-4 text-ellipsis">Dashboard</h4>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-transparent text-white">
                        <i className="fas fa-home me-2"></i> Home
                    </Link>
                    <a href="#" className="list-group-item list-group-item-action bg-transparent text-white">
                        <i className="fas fa-user me-2"></i> Profile
                    </a>
                    <a href="#" className="list-group-item list-group-item-action bg-transparent text-white">
                        <i className="fas fa-newspaper me-2"></i> Posts
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar
