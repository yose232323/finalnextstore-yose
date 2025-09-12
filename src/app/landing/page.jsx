"use client";
import Counter from "@/components/Counter";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="ml-auto mr-auto mt-24">
      <h1 className="text-4xl font-bold text-zinc-700">Brillare Store</h1>
      <p className="font-semibold text-zinc-600">““Encuentra tu estilo””</p>
      <Counter />
      <div className="relative w-full h-96 mx-auto">
        <Image
          src="https://amuli.co/cdn/shop/files/1.png?v=1719075542&width=400"
          alt="Joya destacada"
          fill
          style={{ objectFit: "contain" }}
          className="rounded-xl shadow-lg"
          priority
        />
      </div>
    </div>
  );
};

export default LandingPage;
