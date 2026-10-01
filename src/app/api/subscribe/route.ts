import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "subscription",
      limit: 1,
    });

    if (response.items.length === 0) {
      return NextResponse.json(
        { error: "No subscription entry found" },
        { status: 404 }
      );
    }

    const item = response.items[0];

    const subscription = {
    
      warningText: item.fields.warningTextStart,
      


      warningLinkText: item.fields.warningLinkText ?? "",
      warningTextEnd: item.fields.warningTextEnd ?? "",
      formTitle: item.fields.formTitle ?? "",
      formSubtitle: item.fields.formSubtitle ?? "",
      nameLabel: item.fields.nameLabel ?? "",
      namePlaceholder: item.fields.namePlaceholder ?? "",
      emailLabel: item.fields.emailLabel ?? "",
      emailPlaceholder: item.fields.emailPlaceholder ?? "",
      diabetesSelectLabel: item.fields.diabetesSelectLabel ?? "",
      diabetesOptionDefault: item.fields.diabetesOptionDefault ?? "",
      diabetesOptions: item.fields.diabetesOptions ?? [],
      checkboxTextStart: item.fields.checkboxTextStart ?? "",
      termsLinkText: item.fields.termsLinkText ?? "",
      checkboxTextMiddle: item.fields.checkboxTextMiddle ?? "",
      privacyLinkText: item.fields.privacyLinkText ?? "",
      submitButtonText: item.fields.submitButtonText ?? ""







      
    };

    

  


    console.log("Subscription:", subscription);

    console.log(
      "LOADING IMAGE:",
      JSON.stringify(item.fields.loadingImage, null, 2)
    );

    return NextResponse.json(subscription);
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
