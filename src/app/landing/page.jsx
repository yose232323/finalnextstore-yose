"use client";

import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="ml-auto mr-auto mt-24">
      <h1 className="text-5xl font-bold text-zinc-200">yosestore</h1>
      <p className="font-semibold text-zinc-600">““Encuentra tu estilo””</p>

      <div className="relative w-full h-200 mx-auto">
        <Image
          src=""
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
