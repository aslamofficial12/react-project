import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      // content_type: "interstitialGlucose",
      content_type: "glucoseComparisonPage",
      limit: 1,
    });

    if (response.items.length === 0) {
      return NextResponse.json(
        { error: "No entry found" },
        { status: 404 }
      );
    }

    const item = response.items[0];
    const fields = item.fields;

    // Helper to convert Contentful asset URLs to absolute HTTPS URLs
    const getImageUrl = (image: any) => {
      const url = image?.fields?.file?.url;
      if (!url) return null;

      return url.startsWith("//") ? `https:${url}` : url;
    };

    const pageData = {
      id: item.sys.id,

      // 1. Hero Section
      heroHeading: fields.heroHeading ?? null,
      heroDescription: fields.heroDescription ?? null,
      heroImage: getImageUrl(fields.heroImage),
      heroImageAlt: fields.heroImageAlt ?? null,

      // 2. Sensor vs Blood Glucose Section
      trainSectionHeading: fields.trainSectionHeading ?? null,
      introParagraph1: fields.introParagraph1 ?? null,
      introParagraph2: fields.introParagraph2 ?? null,
      introParagraph3: fields.introParagraph3 ?? null,

      // 3. Stable Glucose Card
      stableCardHeading: fields.stableCardHeading ?? null,
      stableCardDescription: fields.stableCardDescription ?? null,
      stableCardImage: getImageUrl(fields.stableCardImage),
      stableCardImageAlt: fields.stableCardImageAlt ?? null,

      // Rising Glucose Card
      risingCardHeading: fields.risingCardHeading ?? null,
      risingCardDescription: fields.risingCardDescription ?? null,
      risingCardImage: getImageUrl(fields.risingCardImage),
      risingCardImageAlt: fields.risingCardImageAlt ?? null,

      // Falling Glucose Card
      fallingCardHeading: fields.fallingCardHeading ?? null,
      fallingCardDescription: fields.fallingCardDescription ?? null,
      fallingCardImage: getImageUrl(fields.fallingCardImage),
      fallingCardImageAlt: fields.fallingCardImageAlt ?? null,
      option1:fields.option1 ?? null,
      option2:fields.option2 ?? null,
      option3:fields.option3 ?? null,
      option4:fields.option4 ?? null,
      option5:fields.option5 ?? null, 
      option6:fields.option6 ?? null,

      // 4. Comparison Section
      comparisonSectionHeading:
        fields.comparisonSectionHeading ?? null,

      // Blood Glucose
      bloodGlucoseHeading: fields.bloodGlucoseHeading ?? null,
      bloodGlucoseDescription:
        fields.bloodGlucoseDescription ?? null,
      bloodGlucoseBulletPoints:
        fields.bloodGlucoseBulletPoints ?? [],

      // Sensor System
      sensorSystemHeading: fields.sensorSystemHeading ?? null,
      sensorSystemDescription:
        fields.sensorSystemDescription ?? null,
      sensorSystemBulletPoints:
        fields.sensorSystemBulletPoints ?? [],

      // 5. Video Section
      videoSectionHeading: fields.videoSectionHeading ?? null,
      videoSubtitle: fields.videoSubtitle ?? null,
      videoUrl: fields.videoUrl ?? null,
      videoTitle: fields.videoTitle ?? null,
      documentReference: fields.documentReference ?? null,
    };

    console.log("Glucose Comparison Page fetched successfully");

    return NextResponse.json(pageData);
  } catch (error) {
    console.error("Contentful error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Contentful data",
        details:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}