"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductsCard = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <div className="w-[10vw]">
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <CardTitle>Cproduct.title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
