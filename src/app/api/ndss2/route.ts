import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  console.log("NDSS Subsidy API started");

  try {
    const response = await client.getEntries({
      content_type: "ndssSubsidy2", // Correct ID
      limit: 1,
    });

    console.log("Contentful total:", response.total);

    if (!response.items || response.items.length === 0) {
      return NextResponse.json(
        {
          error: "No NDSS subsidy entry found",
          contentType: "ndss-subsidy2", // Update to exact type
          total: response.total,
        },
        { status: 404 }
      );
    }

    const item: any = response.items[0];
    const fields: any = item.fields;

    console.log("Entry ID:", item.sys.id);
    console.log("Available fields:", Object.keys(fields));

    // Improved Contentful image URL helper
    const getImageUrl = (image: any) => {
      const url = image?.fields?.file?.url;
      if (!url) return null;
      // Handle urls that start with '//' (Contentful default)
      if (url.startsWith("//")) {
        return `https:${url}`;
      }
      return url.startsWith("http") ? url : `https://${url}`;
    };

    const dataPage = {
      // ==========================================
      // PAGE / HERO
      // ==========================================
      step3title: fields.step3title ?? null,
      step3description: fields.step3description ?? null,
      eligibilityTitle: fields.eligibilityTitle ?? null,
      eligibilityDescription: fields.eligibilityDescription ?? null,

      // ==========================================
      // FULL SUBSIDY
      // ==========================================
      fullSubsidyTabLabel: fields.fullSubsidyTab?? null,
      fullSubsidyTitle: fields.fullSubsidyTitle ?? null,
      fullSubsidyMainText: fields.fullSubsidyMainText ?? null,
      fullSubsidySecondaryText: fields.fullSubsidySecondaryText ?? null,

      fullSubsidyCard1Image: fields.fullSubsidyCard1Image ?? null,
      fullSubsidyCard1Title: fields.fullSubsidyCard1title ?? null,
      fullSubsidyCard1ButtonText: fields.fullSubsidyCard1buttonText ?? null,

      fullSubsidyCard2Image: fields.fullSubsidyCard2Image ?? null,
      fullSubsidyCard2Title: fields.fullSubsidyCard2title ?? null,
      fullSubsidyCard2ButtonText: fields.fullSubsidyCard2buttonText ?? null,

      fullSubsidyCard3Image: fields.fullSubsidyCard3Image ?? null,
      fullSubsidyCard3Title: fields.fullSubsidyCard3title ?? null,
      fullSubsidyCard3ButtonText: fields.fullSubsidyCard3buttonText ?? null,

      fullSubsidyCard4Image: fields.fullSubsidyCard4Image ?? null,
      fullSubsidyCard4Title: fields.fullSubsidyCard4title ?? null,
      fullSubsidyCard4ButtonText: fields.fullSubsidyCard4buttonText ?? null,

      // ==========================================
      // CO-PAYMENT SUBSIDY
      // ==========================================
      coPaymentSubsidyTabLabel: fields.coPaymentSubsidyTabLabel ?? null,
      coPaymentSubsidyTitle: fields.coPaymentSubsidyTitle ?? null,
      coPaymentSubsidyDescription: fields.coPaymentSubsidyDescription ?? null,
      coPaymentNavigationLabel: fields.coPaymentNavigationLabel ?? null,
      coPaymentImage: fields.coPaymentImage ?? null,
      coPaymentInformation: fields.coPaymentInformation ?? null,

      // ==========================================
      // NEXT STEPS & FUNDING
      // ==========================================
      nextStepsTitle: fields.nextStepsTitle ?? null,
      nextStepsDescription: fields.nextStepsDescription ?? null,
      fundingUpdatesTitle: fields.fundingUpdatesTitle ?? null,
      fundingUpdatesDescription: fields.fundingUpdatesDescription ?? null,
    };

    return NextResponse.json(dataPage);
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