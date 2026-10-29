import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { message: "Verification token is missing." },
        { status: 400 }
      );
    }

    const backendUrl = new URL(
      "http://192.168.31.180:8081/api/verify-email"
    );

    backendUrl.searchParams.set("token", token);

    const response = await fetch(backendUrl.toString(), {
      method: "POST",
      cache: "no-store",
    });

    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type":
          response.headers.get("content-type") ||
          "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Verification proxy error:", error);

    return NextResponse.json(
      { message: "Unable to connect to the backend." },
      { status: 502 }
    );
  }
}