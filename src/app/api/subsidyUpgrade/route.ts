import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "subsidyUpgradePage",
      limit: 1,
    });

    if (response.items.length === 0) {
      return NextResponse.json(
        { error: "No entry found" },
        { status: 404 }
      );
    }

    const item = response.items[0];

    // Mapping all the fields from Contentful to your JSON response
    const pageData = {
      id: item.sys.id,
      
      // Hero Section
      heroTitle: item.fields.heroTitle??null,
      
      // Intro Section
      introDescription: item.fields.introDescription??null,
      introHighlight: item.fields.introHighlight??null,
      
      // Features Main
      featuresMainTitle: item.fields.featuresMainTitle??null,
      
      // Feature 1
      feature1Title: item.fields.feature1title??null,
      feature1Description: item.fields.feature1description??null,
      
      // Feature 2
      feature2Title: item.fields.feature2title??null,
      feature2Description: item.fields.feature2description??null,
      
      // Feature 3
      feature3Title: item.fields.feature3title??null,
      feature3Description: item.fields.feature3description??null,
      feature3LinkText: item.fields.feature3linkText??null,
      feature3LinkUrl: item.fields.feature3linkUrl??null,
      
      // Feature 4
      feature4Title: item.fields.feature4title??null,
      feature4Description: item.fields.feature4description??null,
      feature4LinkText: item.fields.feature4linkText??null,
      feature4LinkUrl: item.fields.feature4linkUrl??null,
      
      // Support Section
      supportTitle: item.fields.supportTitle??null,
      supportDescriptionPrimary: item.fields.supportDescriptionPrimary??null,
      supportLink1Text: item.fields.supportLink1text??null,
      supportLink1Url: item.fields.supportLink1Url??null,
      supportLink2Text: item.fields.supportLink2text??null,
      supportLink2Url: item.fields.supportlink2Url??null,
      supportLink3Text: item.fields.supportLink3text??null,
      supportLink3Url: item.fields.supportlink3Url??null,
      supportDescriptionSecondary: item.fields.supportDescriptionSecondary??null,
      
      // If you have an image field like your console.log suggested:
      // loadingImage: item.fields.loadingImage?.fields?.file?.url || null,
    };

    console.log("Page Data Fetched Successfully");

    return NextResponse.json(pageData);
    
  } catch (error) {
    console.error("Contentful error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Contentful data",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}