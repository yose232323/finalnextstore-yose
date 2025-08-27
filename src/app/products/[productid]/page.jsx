"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ProductDetailPage = ({ params }) => {
  const { productid } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productid}`
      );
      //console.log(response);
      setProduct(response.data);
      setError(null);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;
  if (!product) return <p>No se encontro el producto...</p>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-start border border-gray-50 shadow-lg rounded-xl p-8"></div>
      <div className="relative w-full h-96 bg-zinc-50 rounded-lg p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: `contain` }}
          priority
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
