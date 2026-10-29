
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const productKey = searchParams.get("productKey");

  if (!productKey) {
    return NextResponse.json(
      { error: "Product key is required" },
      { status: 400 }
    );
  }

  try {
    const apiUrl = new URL(
      "http://192.168.31.180:8081/api/get-product"
    );

    apiUrl.searchParams.set("productKey", productKey);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Backend request failed" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Product API error:", error);

    return NextResponse.json(
      { error: "Unable to connect to backend" },
      { status: 502 }
    );
  }
}
