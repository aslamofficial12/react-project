import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "pageProduct",
    });

    const products = response.items.map((item: any) => {
      const fields = item.fields;

      return {
        id: item.sys.id,
        name: fields.name,
        description: fields.description,
        price: fields.price,
        // image: fields.featuredImage?.fields?.file?.url,
          //  image: fields.featuredProductImage,
           image: fields.featuredProductImage?.fields?.file?.url,
           internalname:fields.internalName,
      };
    });

    return NextResponse.json(products);
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