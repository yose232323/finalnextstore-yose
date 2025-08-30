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
  const { items } = useCartStore();

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
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <div>
          {items.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
