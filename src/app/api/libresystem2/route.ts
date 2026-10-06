import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
    console.log("start from here");

    try {
        const response = await client.getEntries({
            content_type: "freeStyleLibrePagePartTwo",
            limit: 1,
        });

        const item: any = response.items[0];

        if (!item) {
            console.log("this code executed item not found");

            return NextResponse.json(
                { error: "Landing page not found" },
                { status: 404 }
            );
        }

        const fields = item.fields;

        // Helper function to safely parse image URLs from Contentful Asset references
        const getImageUrl = (imageAsset: any) => {
            const url = imageAsset?.fields?.file?.url;
            return url ? (url.startsWith("//") ? `https:${url}` : url) : null;
        };

        const landingPage = {
            // Entry & Features
           
            featuresLearnMoreUrl: fields.featuresLearnMoreUrl || "",
            feature1Name: fields.feature1Name || "",
            feature1Value: fields.feature1Value || "",
            feature2Name: fields.feature2Name || "",
            feature2Value: fields.feature2Value || "",
            feature3Name: fields.feature3Name || "",
            feature3Value: fields.feature3Value || "",

            // Connected Care Section
            connectedCareTitle: fields.connectedCareTitle || "",
            connectedCard1Title: fields.connectedCard1Title || "",
            connectedCard1Description: fields.connectedCard1Description || "",
            connectedCard1LinkText: fields.connectedCard1LinkText || "",
            connectedCard1LinkUrl: fields.connectedCard1LinkUrl || "",
            connectedCard1Image: getImageUrl(fields.connectedCard1Image),
            connectedCard1ImageAlt: fields.connectedCard1ImageAlt || "",

            // Resources Section
            resourcesTitle: fields.resourcesTitle || "",
            resource1Title: fields.resource1Title || "",
            resource1Description: fields.resource1Description || "",
            resource1LinkText: fields.resource1LinkText || "",
            resource1LinkUrl: fields.resource1LinkUrl || "",
            resource1Image: getImageUrl(fields.resource1Image),
            resource1ImageAlt: fields.resource1ImageAlt || "",

            resource2Title: fields.resource2Title || "",
            resource2Description: fields.resource2Description || "",
            resource2LinkText: fields.resource2LinkText || "",
            resource2LinkUrl: fields.resource2LinkUrl || "",
            resource2Image: getImageUrl(fields.resource2Image),
            resource2ImageAlt: fields.resource2ImageAlt || "",

            resource3Title: fields.resource3Title || "",
            resource3Description: fields.resource3Description || "",
            resource3LinkText: fields.resource3LinkText || "",
            resource3LinkUrl: fields.resource3LinkUrl || "",
            resource3Image: getImageUrl(fields.resource3Image),
            resource3ImageAlt: fields.resource3ImageAlt || "",

            // Testimonials & Subscription
            testimonialsTitle: fields.testimonialsTitle || "",
            testimonials: fields.testimonials || "",
            subscribeSection: fields.subscribeSection || "",
        };

        return NextResponse.json(landingPage);
    } catch (error) {
        console.error("Contentful error:", error);

        return NextResponse.json(
            {
                error: "Failed to fetch Contentful data please check",
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}