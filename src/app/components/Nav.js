'use client';

import Link from "next/link";

const Nav = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/">Dashboard</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" href="/">Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/add-product">Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/title">Title</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;