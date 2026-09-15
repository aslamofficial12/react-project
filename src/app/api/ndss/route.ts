import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  console.log("NDSS Subsidy API started");

  try {
    const response = await client.getEntries({
      content_type: "ndss",
      limit: 1,
    });

    console.log("Contentful total:", response.total);

    if (!response.items || response.items.length === 0) {
      return NextResponse.json(
        {
          error: "No NDSS subsidy entry found",
          contentType: "ndssSubsidy",
          total: response.total,
        },
        { status: 404 }
      );
    }

    const item: any = response.items[0];
    const fields: any = item.fields;

    console.log("Entry ID:", item.sys.id);
    console.log("Available fields:", Object.keys(fields));

    // Contentful image URL helper
    const getImageUrl = (image: any) => {
      const url = image?.fields?.file?.url;

      if (!url) {
        return null;
      }

      return url.startsWith("http") ? url : `https:${url}`;
    };

    const dataPage = {
      // ==========================================
      // PAGE / HERO
      // ==========================================
      pageTitle: fields.pageTitle ?? null,

      // heroImage: getImageUrl(fields.heroImage),
       heroImage: fields.heroimage ?? null,

      // ==========================================
      // WEBINAR SECTION
      // ==========================================
      webinarTitle: fields.webinarTitle ?? null,

      webinarDescription:
        fields.webinarDescription ?? null,

      webinarHighlightsTitle:
        fields.webinarHighlightsTitle ?? null,

      webinarHighlights:
        fields.webinarHighlights ?? [],

      webinarAudienceLabel:
        fields.webinarAudienceLabel ?? null,

      webinarAudience:
        fields.webinarAudience ?? null,

      webinarDateLabel:
        fields.webinarDateLabel ?? null,

      webinarDate:
        fields.webinarDate ?? null,

      webinarLocationLabel:
        fields.webinarLocationLabel ?? null,

      webinarLocation:
        fields.webinarLocation ?? null,

      webinarCostLabel:
        fields.webinarCostLabel ?? null,

      webinarCost:
        fields.webinarCost ?? null,

      webinarButtonText:
        fields.webinarButtonText ?? null,

      // ==========================================
      // LIBRE 3 PLUS ANNOUNCEMENT
      // ==========================================
      libre3PlusAvailabilityTitle:
        fields.libre3plusAvailabilityTitle ?? null,

      libre3PlusAvailabilityIntro:
        fields.libre3plusAvailabilityIntro ?? null,

      libreAppDescription:
        fields.libreAppDescription ?? null,

      libre2PlusReaderDescription:
        fields.libre2plusReaderDescription ?? null,

      libreUpgradeDescription:
        fields.libreUpgradeDescription ?? null,

      libre3PlusImage:
        getImageUrl(fields.libre3PlusImage),

      libre3PlusButtonText:
        fields.libre3plusButtonText ?? null,

      libreAppButtonText:
        fields.libreAppButtonText ?? null,

      // ==========================================
      // OMNIPOD 5 SECTION
      // ==========================================
      omnipod5Title:
        fields.omnipod5title ?? null,

      omnipod5Description:
        fields.omnipod5description ?? null,

      omnipod5UpdateDescription:
        fields.omnipod5updateDescription ?? null,

      // ==========================================
      // PRODUCT 1
      // ==========================================
      product1: {
        image: getImageUrl(fields.product1Image),

        title:
          fields.product1title ?? null,

        buttonText:
          fields.product1buttonText ?? null,
      },

      // ==========================================
      // PRODUCT 2
      // ==========================================
      product2: {
        image: getImageUrl(fields.product2Image),

        title:
          fields.product2title ?? null,

        buttonText:
          fields.product2buttonText ?? null,
      },

      // ==========================================
      // PRODUCT 3
      // ==========================================
      product3: {
        image: getImageUrl(fields.product3Image),

        title:
          fields.product3title ?? null,

        buttonText:
          fields.product3buttonText ?? null,
      },

      // ==========================================
      // SWITCHING SENSOR SECTION
      // ==========================================
      switchSensorTitle:
        fields.switchSensorTitle ?? null,

      switchSensorDescription:
        fields.switchSensorDescription ?? null,

      switchSensorSteps:
        fields.switchSensorSteps ?? [],

      switchSensorCompletionDescription:
        fields.switchSensorCompletionDescription ?? null,

      switchSensorButtonText:
        fields.switchSensorButtonText ?? null,

      switchSensorImage:
        getImageUrl(fields.switchSensorImage),

      // ==========================================
      // NDSS ACCESS STEPS
      // ==========================================
      accessStepsTitle:
        fields.accessStepsTitle ?? null,

      step1TabLabel:
        fields.step1tabLabel ?? null,

      step2TabLabel:
        fields.step2tabLabel ?? null,

      step3TabLabel:
        fields.step3tabLabel ?? null,

      // ==========================================
      // STEP 1
      // ==========================================
      step1Title:
        fields.step1title ?? null,

      step1Description:
        fields.step1description ?? null,

      step1Practitioners:
        fields.step1practitioners ?? [],

      // ==========================================
      // STEP 2
      // ==========================================
      step2Title:
        fields.step2title ?? null,

      step2Description:
        fields.step2description ?? null,

      // ==========================================
      // STEP 3
      // ==========================================
      step3Title:
        fields.step3title ?? null,

      step3Description:
        fields.step3description ?? null,

      step3Content:
        fields.step3content ?? null,
    };

    return NextResponse.json(dataPage);
  } catch (error) {
    console.error("Contentful error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Contentful data",
        details:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}
