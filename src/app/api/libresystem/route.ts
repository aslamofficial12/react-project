import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
    console.log("start from here");

    try {
        const response = await client.getEntries({
            content_type: "freeStyleLibrePage",
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
            // Hero Section
            pageTitle: fields.pageTitle || "",
            heroDescription: fields.heroDescription || "",
            heroImage: getImageUrl(fields.heroImage),

            // Worldwide Section
            worldwideTitle: fields.worldwideTitle || "",
            worldwideDescription: fields.worldwideDescription || "",
            worldwideImage: getImageUrl(fields.worldwideImage),

            // CGM Section
            cgmTitle: fields.cgmTitle || "",
            cgmDescription: fields.cgmDescription || "",
            cgmImage1: getImageUrl(fields.cgmImage1),
            cgmImage1Alt: fields.cgmImage1Alt || fields["cgmImage1CgmImage1Alt"] || "",
            cgmImage2: getImageUrl(fields.cgmImage2),
            cgmImage2Alt: fields.cgmImage2Alt || "",

            // Impact Section
            impactTitle: fields.impactTitle || "",
            impactDescription: fields.impactDescription || "",
            impactImage: getImageUrl(fields.impactImage),
            impactImageAlt: fields.impactImageAlt || "",

            // Progress Section
            progressTitle: fields.progressTitle || "",
            progressDescription: fields.progressDescription || "",
            
            // Progress Step 1
            progressStep1Title: fields.progressStep1Title || "",
            progressStep1Description: fields.progressStep1Description || "",
            progressStep1Image: getImageUrl(fields.progressStep1Image),
            progressStep1ImageAlt: fields.progressStep1ImageAlt || "",

            // Progress Step 2
            progressStep2Title: fields.progressStep2Title || "",
            progressStep2Description: fields.progressStep2Description || "",
            progressStep2Image: getImageUrl(fields.progressStep2Image),
            progressStep2ImageAlt: fields.progressStep2ImageAlt || "",

            // Progress Step 3
            progressStep3Title: fields.progressStep3Title || "",
            progressStep3Description: fields.progressStep3Description || "",
            progressStep3Image: getImageUrl(fields.progressStep3Image),
            progressStep3ImageAlt: fields.progressStep3ImageAlt || "",

            // Progress Step 4
            progressStep4Title: fields.progressStep4Title || "",
            progressStep4Description: fields.progressStep4Description || "",
            progressStep4Image: getImageUrl(fields.progressStep4Image),
            progressStep4ImageAlt: fields.progressStep4ImageAlt || "",

            // Discover Section
            discoverTitle: fields.discoverTitle || "",
            discoverDescription: fields.discoverDescription || "",
            discoverImage: getImageUrl(fields.discoverImage),
            discoverImageAlt: fields.discoverImageAlt || "",
            discoverFeatureA: fields.discoverFeatureA || "",
            discoverFeatureB: fields.discoverFeatureB || "",
            discoverFeatureC: fields.discoverFeatureC || "",
            discoverFeatureD: fields.discoverFeatureD || "",
            discoverFeatureE: fields.discoverFeatureE || "",
            discoverFeatureF: fields.discoverFeatureF || "",
            discoverButtonText: fields.discoverButtonText || "",
            discoverButtonUrl: fields.discoverButtonUrl || "",

            // Features Section
            featuresTitle: fields.featuresTitle || "",
            featuresProductName: fields.featuresProductName || "",
            featuresProductImage: getImageUrl(fields.featuresProductImage),
            featuresLearnMoreText: fields.featuresLearnMoreText || "",
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