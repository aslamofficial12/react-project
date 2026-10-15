import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
    console.log("API START");

    try {
        console.log("Fetching Contentful data...");

        const response = await client.getEntries({
            content_type: "freeStyleLibreTip",
            include: 2,
        });

        console.log("Contentful API completed");
        console.log("Total items:", response.items.length);

        if (!response.items || response.items.length === 0) {
            return NextResponse.json(
                {
                    error: "Tips not found",
                },
                {
                    status: 404,
                }
            );
        }

        const assets = response.includes?.Asset || [];

        const tips = response.items
            .map((item: any) => {
                const fields = item.fields;

                let imageUrl = null;

                // Get image directly from Contentful
                if (fields.image?.fields?.file?.url) {
                    imageUrl =
                        fields.image.fields.file.url;
                }

                // Get image from included Asset
                else if (fields.image?.sys?.id) {
                    const asset = assets.find(
                        (asset: any) =>
                            asset.sys.id ===
                            fields.image.sys.id
                    );

                    if (asset) {
                        imageUrl =
                            asset.fields?.file?.url || null;
                    }
                }

                // Convert Contentful image URL
                if (
                    imageUrl &&
                    imageUrl.startsWith("//")
                ) {
                    imageUrl = `https:${imageUrl}`;
                }

                return {
                    // id: item.sys.id,

                    tipNumber:
                        fields.tipNumber || "",

                    title:
                        fields.title || "",

                    description:
                        fields.description || "",

                    image: imageUrl,

                    imageAlt:
                        fields.imageAlt || "",

                    buttonText:
                        fields.buttonText || "",

                    buttonLink:
                        fields.buttonLink || "",

                    imageLeft:
                        fields.imageLeft === true ||
                        fields.imageLeft === "true",
                };
            })
            .sort(
                (a, b) =>
                    Number(a.tipNumber) -
                    Number(b.tipNumber)
            );

        console.log("Final tips:", tips);

        return NextResponse.json(tips, {
            status: 200,
        });

    } catch (error) {
        console.error(
            "Contentful API ERROR:",
            error
        );

        return NextResponse.json(
            {
                error: "Failed to fetch Contentful data",

                details:
                    error instanceof Error
                        ? error.message
                        : String(error),
            },
            {
                status: 500,
            }
        );
    }
}