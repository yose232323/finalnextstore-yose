//src/components/cart/ShoppingCart.jsx
"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Separator } from "../ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ShoppingCart = () => {
  const {
    items,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 p-2 rounded-md hover:bg-teal-100 trasition-colors">
          <ShoppingBasket />
          <span>Mi Carrito</span>
        </button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Mi Carrito de compras</SheetTitle>
        </SheetHeader>

        <div>
          {items.map((item) => (
            <Card key={item._id}>
              <CardContent className="flex items-center justify-between">
                <span>{item.title}</span>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => decrementQuantity(item._id)}
                  >
                    -
                  </Button>
                  <span className="bg-teal-700 text-white px-2 py-1 rounded">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => incrementQuantity(item._id)}
                  >
                    +
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeProduct(item._id)}
                  >
                    x
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator />
        <div>Total productos:{totalItems}</div>
        <div>Total a pagar:${totalPrice.toFixed(2)}</div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
