import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  console.log("start from here");

  try {
    const response = await client.getEntries({
      content_type: "subsidyaccess",
      limit: 1,
    });

    const item = response.items[0];

    if (!item) {
      console.log("this code executed item not found");

      return NextResponse.json(
        { error: "Landing page not found" },
        { status: 404 }
      );
    }

    const fields = item.fields;

    console.log("ALL FIELD NAMES:", Object.keys(fields));


    console.log("ALL FIELDS:", fields);
    console.log("TYPE1 LABEL:", fields.diabetesType1Label);
    console.log("TYPE2 LABEL:", fields.diabetesType2Label);


    const landingPage = {
      // Main
      title1: fields.title1,
      title2: fields.title2,

      // Images
      image1: fields.image1?.fields?.file?.url,
      image2: fields.image2?.fields?.file?.url,
      image3: fields.image3?.fields?.file?.url,
      image4: fields.image4?.fields?.file?.url,
      image5: fields.image5?.fields?.file?.url,
      image6: fields.image6?.fields?.file?.url,
      image7: fields.image7?.fields?.file?.url,
      image8: fields.image8?.fields?.file?.url,

      // Subtitle / Diabetes type
      subtitle1: fields.subtitle1,
      // diabetesType1label: fields.diabetesType1label ?? null,
      // diabetestype2Label: fields.diabetestype2Label ?? null,

      diabetesType1label: fields.diabetesType1label ?? null,
diabetesType2label: fields.diabetesType2label ?? null,
dvaTitle:fields.dvaTitle,




      // Type 1 section
      type1SectionTitle: fields.type1SectionTitle,

      // NDSS
      ndssTitle: fields.ndssTitle,
      ndssDescription: fields.ndssDescription,
      ndssLearnMoreText: fields.ndssLearnMoreText,
      ndssLinkLabel: fields.ndssLinkLabel,

      // Type 1 Trial
      type1TrialTitle: fields.type1trialTitle,
      type1TrialDescription: fields.type1trialDescription,
      type1TrialSecondaryText: fields.type1TrialSecondaryText,
      type1TrialButtonLabel: fields.type1trialButtonLabel,

      // Type 1 DVA
      type1dvaTitle: fields.type1dvaTitle,
      type1dvaDescription: fields.type1dvaDescription,
      type1dvaNote: fields.type1dvaNote,
      type1dvaButtonLabel: fields.type1dvaButtonLabel,

      // Type 2 section
      type2SectionTitle: fields.type2SectionTitle,

      // Purchase Online
      purchaseOnlineTitle: fields.purchaseOnlineTitle,
      purchaseOnlineDescription: fields.purchaseOnlineDescription,
      purchaseOnlineButtonLabel: fields.purchaseOnlineButtonLabel,

      // Type 2 Trial
      type2TrialTitle: fields.type2TrialTitle,
      type2TrialDescription: fields.type2TrialDescription,
      type2TrialSecondaryText: fields.type2TrialSecondaryText,
      type2TrialButtonLabel: fields.type2TrialButtonLabel,

      // Type 2 DVA
      type2DvaTitle: fields.type2DvaTitle,
      type2DvaDescription: fields.type2DvaDescription,
      type2DvaNote: fields.type2DvaNote,
      type2DvaButtonLabel: fields.type2DvaButtonLabel,

      // EFT
      eftTitle: fields.eftTitle,
      eftDescription: fields.eftDescription,
      eftLinkLabel: fields.eftLinkLabel,

      // Government enquiries
      governmentEnquiriesTitle: fields.governmentEnquiriesTitle,
      governmentEnquiriesDescription: fields.governmentEnquiriesDescription,
      governmentEnquiriesButtonLabel: fields.governmentEnquiriesButtonLabel,
    };
    console.log("fields Diabetes :",fields.diabetesType1Label ?? null);
    console.log("fields Diabetes :",fields.diabetesType2Label ?? null);

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