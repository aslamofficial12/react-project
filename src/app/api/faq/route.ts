import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "faq",
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
     faqTitle:fields.faqTitle,
     expandAllLabel:fields.expandAllLabel,
     collapseAllLabel:fields.collapseAllLabel,
     faq1Question:fields.faq1question,
     faq1Answer:fields.faq1answer,
     faq2Question:fields.faq2question,
     faq2Answer:fields.faq2answer,
     faq3Question:fields.faq3question,
     faq3Answer:fields.faq3answer,
     faq4Question:fields.faq4question,
     faq4Answer:fields.faq4answer
     
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