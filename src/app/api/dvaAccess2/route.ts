import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "dvaAccess2",
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
      whiteCardTabLabel:fields.whiteCardTabLabel,
      whiteCardSendMessage:fields.whiteCardSendMessage,
      goldCardSendMessage:fields.goldCardSendMessage,
      nextTitle:fields.nextTitle,
      nextMessage1:fields.nextMessage1,
      nextMessage2:fields.nextMessage2,
      nextMessage3:fields.nextMessage3,
      nextLink:fields.nextLink,

     
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