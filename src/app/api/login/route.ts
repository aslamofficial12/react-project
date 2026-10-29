
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("Login request received");

    const response = await fetch(
      "http://192.168.31.180:8081/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: body.username,
          password: body.password,
        }),
        cache: "no-store",
      }
    );

    const responseText = await response.text();

    console.log("Backend status:", response.status);
    console.log("Backend response:", responseText);

    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: "Backend returned an invalid JSON response." };
    }

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Backend login error:", error);

    return NextResponse.json(
      {
        message: "Unable to connect to the backend.",
        error: error.message,
      },
      { status: 502 }
    );
  }
}
