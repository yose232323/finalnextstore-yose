//src/components/layout/Logo.jsx
import React from "react";
import { ShoppingBag } from "lucide-react";

const Logo = () => {
  return (
    <div className="text-lg font-bold text-stone-600 flex gap-1">
      <ShoppingBag /> <span>Yose Store</span>
    </div>
  );
};

export default Logo;
