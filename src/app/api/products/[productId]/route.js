import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Product from "@/models/Product";

// Traer un solo producto
export async function GET(request, { params }) {
  await dbConnect();

  const { productId } = params;

  // Validación simple de ObjectId
  if (!productId || !/^[0-9a-fA-F]{24}$/.test(productId)) {
    return NextResponse.json(
      { success: false, error: "ID de producto inválido" },
      { status: 400 }
    );
  }

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
