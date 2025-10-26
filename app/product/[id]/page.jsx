"use client"
import React, { useEffect, useState } from 'react'
import ProductPageClient from '../../../components/ProductPage/Page';

const ProductPage = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [id, setId] = useState();

  useEffect(() => {
    const getIdFromParams = async () => {
      console.log("fetching id from the params");
      
      const productId = await params
      setId(productId.id);
    }
    getIdFromParams();
  }, []);

  useEffect(() => {
    if (!id) return;
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await fetch(`/api/products/${id}?id=${id}`);
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data?.message || "Failed to fetch product");
          }
          console.log("Fetched product data:", data);
          setProduct(data);
        } catch (err) {
          console.error("Failed to fetch product:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }, [id]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <ProductPageClient product={product} />
      ) : (
        <p>Product not found.</p> 
      )}
    </div>
  )
}

export default ProductPage