"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function ProductDetailPage() {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productid) return;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productid}`);
        if (response.data.success) {
          setProduct(response.data.data);
          setError(null);
        } else {
          setError(response.data.error || "Producto no encontrado");
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productid]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.title || product.name}</h1>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      {product.image && (
        <img
          src={product.image}
          alt={product.title || product.name}
          width={300}
        />
      )}
    </div>
  );
}
