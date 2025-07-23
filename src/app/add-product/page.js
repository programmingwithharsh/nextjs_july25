'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProduct = ({ onAdd }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [product, setProduct] = useState({
        "productName": '',
        "productCode": '',
        "releaseDate": '',
        "description": '',
        "price": '',
        "starRating": '',
        "imageUrl": ''
    });
    const router = useRouter();
    /*
        In class component, we use this.state, this.setState({}) to update component
        In functional Component we use useState

            name - '' <-> kind of similar to this.state = { name = "" }
            setName <-> kind of similar to this.setState({})
    */

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("name", name);
        // console.log("value", value);
        setProduct((prev) => ({
            ...prev,
            [name]: name === 'price' || name === 'starRating' ? parseFloat(value) || '' : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page refresh
        if (product.productName.trim()) {
            const newProduct = {
                ...product,
                productId: Number(new Date())
            }
            // onAdd(name); // calling onAdd props
            // debugger;
            console.log(newProduct);
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });

            if (!res.ok) {
                throw new Error('Failed to add product');
            }

            const createdProduct = await res.json();
            router.push('/products');
        }
    }

    return (
        <div className="container mt-4">
            <h1>This is Add Product Functional Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="productName" placeholder="Product Name" value={product.productName} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" name="productCode" placeholder="Product Code" value={product.productCode} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <input type="date" className="form-control" name="releaseDate" placeholder="Date" value={product.releaseDate} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <input type="number" className="form-control" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <input type="number" className="form-control" name="starRating" placeholder="Rating" value={product.starRating} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" name="imageUrl" placeholder="Image Url" value={product.imageUrl} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;