import { connectMongoDB } from "@/lib/MongoConnect";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function PUT(request, URLParams) {
  try {
    const body = await request.json();
    const id = URLParams.params.id;
    const { name, category, price } = body;

    await connectMongoDB();

    const data = await Product.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });

    return NextResponse.json({ msg: "Updated Successfully", data });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something Went Wrong",
      },
      { status: 400 }
    );
  }
}
