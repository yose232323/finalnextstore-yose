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

const ShoppingCart = () => {
  const {
    items,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-100 transitions-color ">
          <ShoppingBasket />
          <span>Mi carrito</span>
        </button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Tu carrito</SheetTitle>
        </SheetHeader>
        {/* Lista de productos */}
        <div>
          {items.map((item) => (
            <p>
              {item.title}
              <button
                onClick={() => decrementQuantity(item.id)}
                className="bg-zinc-400 p-1"
              >
                -
              </button>

              <span className="bg-zinc-600 text-white p-2">
                {item.quantity}
              </span>

              <button
                onClick={() => incrementQuantity(item.id)}
                className="bg bg-zinc-400 p-1"
              >
                +
              </button>

              <button
                onClick={() => removeProduct(item.id)}
                className="bg-red-700 p-2 justify-end text-white font-semi-bold"
              >
                x
              </button>
            </p>
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
