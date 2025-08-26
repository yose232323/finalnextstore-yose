"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const ProductDetailPage = ({ params }) => {
  const { productid } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  consts[(error, setError)] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/product/${productid}`
      );
      //console.log(response);
      setProduct(response.data);
      setError(null);
      setLoading(false);
    };
    fetchProduct();
  }, [productid]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;
  if (!product) return <p>No se encontro el producto...</p>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="relative w-full h-96 bg-zinc-50 rounded-lg p-4">
        <image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
