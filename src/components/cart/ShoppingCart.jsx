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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShoppingCart = () => {
  const { items, removeProduct, incrementQuantity, decrementQuantity } =
    useCartStore();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-100 transition-colors">
          <ShoppingBasket />
          <span>Mi carrito</span>
        </button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Tu carrito</SheetTitle>
        </SheetHeader>

        {/* Lista de productos */}
        <div className="space-y-4 mt-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <Button
                  onClick={() => removeProduct(item.id)}
                  variant="destructive"
                  size="sm"
                >
                  x
                </Button>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => decrementQuantity(item.id)}
                    size="sm"
                    variant="outline"
                  >
                    -
                  </Button>
                  <span className="px-3">{item.quantity}</span>
                  <Button
                    onClick={() => incrementQuantity(item.id)}
                    size="sm"
                    variant="outline"
                  >
                    +
                  </Button>
                </div>

                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Totales */}
        <div className="flex justify-between">
          <span>Total productos:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total a pagar:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
