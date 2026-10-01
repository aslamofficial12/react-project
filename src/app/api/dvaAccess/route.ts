import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "dvaAccess",
      limit: 1,
    });

    const item = response.items[0];

    if (!item) {
      return NextResponse.json(
        { error: "Landing page not found" },
        { status: 404 }
      );
    }

    const fields = item.fields;

    const landingPage = {
      // General Page Info
      title: fields.title,
      intro: fields.intro,
      infoTitle: fields.infoTitle,
      importantNote: fields.importantNote,

      // heroImage: fields.heroImage.file.url,







      // Announcements & Messages
      announcementTitle: fields.announcementTitle,
      announcementContent: fields.announcementContent,
      existingUserMessage: fields.existingUserMessage,
      newMemberMessage: fields.newMemberMessage,
      regularOrderMessage: fields.regularOrderMessage,
      eligibleTitle: fields.eligibleTitle,

      // Gold Card Details
      goldCardTabLabel: fields.goldCardTabLabel,
      goldCardGovernmentText: fields.goldCardGovernmentText,
      goldCardTypeTitle: fields.goldCardTypeTitle,
      goldCardTypeSubtitle: fields.goldCardTypeSubtitle,
      goldCardName: fields.goldCardName,
      goldCardFileNo: fields.goldCardFileNo,
      goldCardExpiry: fields.goldCardExpiry,
      goldCardTitle: fields.goldCardTitle,
      goldCardSubtitle: fields.goldCardSubtitle,
      goldCardDescription: fields.goldCardDescription,

      // White Card Details
      whiteCardGovernmentText: fields.whiteCardGovernmentText,
      whiteCardTypeTitle: fields.whiteCardTypeTitle,
      whiteCardTypeSubtitle: fields.whiteCardTypeSubtitle,
      whiteCardName: fields.whiteCardName,
      whiteCardFileNo: fields.whiteCardFileNo,
      whiteCardExpiry: fields.whiteCardExpiry,
      whiteCardTitle: fields.whiteCardTitle,
      whiteCardSubtitle: fields.whiteCardSubtitle,
      whiteCardDescription: fields.whiteCardDescription,

      // Access & Steps
      accessTitle: fields.accessTitle,

      step1Title: fields.step1Title,
      step1Description: fields.step1Description,
      step1ButtonLabel: fields.step1ButtonLabel,

      step2Title: fields.step2Title,
      step2Description: fields.step2Description,
      step2ButtonLabel: fields.step2ButtonLabel,

      step3Title: fields.step3Title,
      step3Description: fields.step3Description,
      step3ButtonLabel: fields.step3ButtonLabel,

      // Send Info
      sendTitle: fields.sendTitle,
      sendDescription: fields.sendDescription,

      // Order & Product Headers
      orderDetailsHeader: fields.orderDetailsHeader,
      healthProviderLabel: fields.healthProviderLabel,
      dvaItemNoHeader: fields.dvaItemNoHeader,
      supplierCatalogueNoHeader: fields.supplierCatalogueNoHeader,
      descriptionHeader: fields.descriptionHeader,
      quantityHeader: fields.quantityHeader,
      sensorProductName: fields.sensorProductName,
      readerProductName: fields.readerProductName,
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