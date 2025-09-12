"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <div className="container mx-auto px-4 md:p-32">
      <div className="grid md:grid-cols-2 gap-8 items-start border border-zinc-50 shadow-lg rounded-xl p-8">
        <div className="relative w-full h-96 bg-white rounded-lg p-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: `contain` }}
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="flex font-bold text-2xl text-zinc-800 py-2">
            {product.title}
          </h2>
          <p className="text sm font-medium text-zinc-500 bg -zinc-200 uppercase rounded-md w-fit">
            {product.category}
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed text-justify">
            {product.description}
          </p>
          <div className="flex items-center justify-end gap-2 text-zinc-400">
            <span>
              ⭐ {product.rating.rate} ({product.rating.count} calificaciones)
            </span>
          </div>
          <div>
            <p className="flex justify-start text-3xl font-semibold text-zinc-600 py-2">
              ${product.price}
            </p>
          </div>
          <div className="flex justify-start">
            <Button variant="outline">Añadir al carrito</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
