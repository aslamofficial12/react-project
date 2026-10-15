import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
    console.log("API START");

    try {
        console.log("Fetching Contentful data...");

        const response = await client.getEntries({
            content_type: "freeStyleLibreTipsPage",
        });

        console.log("Contentful API completed");

        const data = response.items.map((item: any) => ({
            // id: item.sys.id,
            pageTitle: item.fields.pageTitle || "",
            heroImageAlt: item.fields.heroImageAlt || "",
            breadcrumbText: item.fields.breadcrumbText || "",
            introTitle: item.fields.introTitle || "",
            introText: item.fields.introText || "",
            footerNote: item.fields.footerNote || "",
            tips: item.fields.tips || "",
            heroImage: item.fields.heroImage
                ? `https:${item.fields.heroImage.fields.file.url}`
                : "",
        }));

        return NextResponse.json({
            success: true,
            data,
        });
    } catch (error) {
        console.error("Contentful API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch Contentful data",
            },
            { status: 500 }
        );
    }
}