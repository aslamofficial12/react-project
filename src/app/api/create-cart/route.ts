export async function POST() {
    try {

        const response = await fetch(
            "http://192.168.31.180:8081/api/create-cart",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    currency: "USD"
                }),
                cache: "no-store"
            }
        );

        const data = await response.json();

        return Response.json(data, {
            status: response.status
        });

    } catch (error) {

        return Response.json(
            {
                message: "Unable to connect to backend"
            },
            {
                status: 502
            }
        );

    }
}