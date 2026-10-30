
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Get Authorization token
    const token = request.headers.get("Authorization");

    // Get sessionId from frontend request body
    const body = await request.json();
    const { sessionId } = body;

    // Validate token
    if (!token) {
      return NextResponse.json(
        { message: "Authorization token missing" },
        { status: 401 }
      );
    }

    // Validate sessionId
    if (!sessionId) {
      return NextResponse.json(
        { message: "Session ID missing" },
        { status: 400 }
      );
    }

    // Call backend logout API
    const response = await fetch(
      "http://192.168.31.180:8081/api/logout",
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: sessionId,
        }),
        cache: "no-store",
      }
    );

    // Read backend response
    const data = await response.json().catch(() => ({}));

    console.log("Backend logout status:", response.status);
    console.log("Backend logout response:", data);

    return NextResponse.json(data, {
      status: response.status,
    });

  } catch (error) {
    console.error("Logout API error:", error);

    return NextResponse.json(
      { message: "Backend connection failed" },
      { status: 502 }
    );
  }
}
