import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  console.log("start from here");

  try {
    const response = await client.getEntries({
      content_type: "productPage",
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
     
      maintitle:fields.maintitle,
      image4 :fields.image4?.fields?.file.url,
      image3 :fields.image3?.fields?.file.url,
      image2 :fields.image2?.fields?.file.url,
      imagefirst :fields.imagefirst?.fields?.file.url,
      subtitle:fields.subtitle,


    

     
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