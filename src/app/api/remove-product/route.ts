import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Frontend-la irundhu varra data
        const { cartId, lineItemId, version, quantity } =
            await request.json();

        // Required values check
        if (!cartId || !lineItemId || version === undefined) {
            return NextResponse.json(
                { message: "Missing required cart details" },
                { status: 400 }
            );
        }

        // Backend remove API call
        const response = await fetch(
            "http://192.168.31.180:8081/api/remove-product",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cartId,
                    lineItemId,
                    version,
                    quantity: quantity ?? 1,
                }),
                cache: "no-store",
            }
        );

        const responseData = await response.text();

        // Backend response handle
        let data;

        try {
            data = JSON.parse(responseData);
        } catch {
            data = { message: responseData };
        }

        return NextResponse.json(data, {
            status: response.status,
        });

    } catch (error) {
        console.error("Remove Product API Error:", error);

        return NextResponse.json(
            { message: "Unable to remove product" },
            { status: 500 }
        );
    }
}
