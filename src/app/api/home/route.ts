import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  console.log("start from here");

  try {
    const response = await client.getEntries({
      content_type: "pageLanding",
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

    const landingPage = {
      id: item.sys.id,
      internalName: fields.internalName,
      heroBannerHeadline: fields.heroBannerHeadline,

      // heroBannerImage: fields.heroBannerImage?.fields?.file?.url
      //   ? `https:${fields.heroBannerImage.fields.file.url}`
      //   : null,
      heroBannerImage:fields.heroBannerImage?.fields?.file.url,

      products:[],

      heroBannerHeadlineColor: fields.heroBannerHeadlineColor,
    };

    console.log("landingPage:", landingPage);

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