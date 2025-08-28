"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductsCard = ({ product }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardTitle className="truncate h-6 mt-4 py-4">
          {product.title}
        </CardTitle>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-bold text-lg">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/products/${product.id}`}
          className="w-full text-center p-2 bg-zinc-500 text-white rounded hover:bg-zinc-700"
        >
          Ver Detalle
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
