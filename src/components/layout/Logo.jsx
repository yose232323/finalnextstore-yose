import React from "react";
import { ShoppingBag } from "lucide-react";

const Logo = () => {
  return (
    <div className="text-lg font-bold text-zinc-900 flex gap-1">
      <ShoppingBag />
      <span>Brillare Store</span>
    </div>
  );
};

export default Logo;
