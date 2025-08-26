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
        <CardTitle className="truncate h-7 mt-4">{product.tittle}</CardTitle>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-bold text-lg">${product.price}</p>
      </CardContent>
      <CardFooter>
        <link href={`/product/${product.id}`} className="w-full"></link>Ver
        detalle
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
