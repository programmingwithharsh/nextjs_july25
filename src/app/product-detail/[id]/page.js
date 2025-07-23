'use client'

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ProductDetail = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState({});

    const goBack = () => {
        router.back();
    }

    useEffect(() => {
        if (id) {
            fetch(`${apiUrl}/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("API Response", data);
                    setProduct(data)
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [id])

    return (<div className="container mt-4">
        <h1>Product Detail</h1>
        <div className="card">
            <img src={product.imageUrl} className="card-img-top" alt={product.productName} style={{ maxHeight: '300px', objectFit: 'contain' }} />
            <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.productCode}</p>
                <p className="card-text">{product.releaseDate}</p>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.starRating}</p>
                <button onClick={goBack} type="button" className="btn btn-primary">Back</button>
            </div>
        </div>
    </div>);
}

export default ProductDetail;