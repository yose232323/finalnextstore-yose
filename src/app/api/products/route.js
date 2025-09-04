import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnect";
import Product from "@/models/Product";

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({});
    return NextResponse.json({ succes: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { succes: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const product = await Product.create(body);
    return NextResponse.json({ succes: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { succes: false, error: error.message },
      { status: 400 }
    );
  }
}
