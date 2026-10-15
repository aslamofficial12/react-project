import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  console.log("start from here");

  try {
    const response = await client.getEntries({
      content_type: "testimonial",
      include: 2,
    });

    if (response.items.length === 0) {
      console.log("No testimonial entries found");

      return NextResponse.json(
        { error: "Testimonials not found" },
        { status: 404 }
      );
    }

    // Get all Contentful Assets
    const assets = response.includes?.Asset || [];

    console.log("Contentful assets:", assets);

    const testimonials = response.items.map((item: any) => {
      const fields = item.fields;

      console.log(
        "--------------------------------"
      );

      console.log(
        "Testimonial name:",
        fields.name
      );

      console.log(
        "Raw image field:",
        fields.image
      );

      let imageUrl = null;

      // =========================================
      // CASE 1:
      // Image asset is already expanded
      // =========================================

      if (fields.image?.fields?.file?.url) {
        imageUrl = fields.image.fields.file.url;
      }

      // =========================================
      // CASE 2:
      // Image is a Contentful Asset Link
      // =========================================

      else if (fields.image?.sys?.id) {
        const asset = assets.find(
          (asset: any) =>
            asset.sys.id === fields.image.sys.id
        );

        if (asset) {
          imageUrl =
            asset.fields?.file?.url ?? null;
        }
      }

      // =========================================
      // Convert Contentful URL
      // =========================================

      if (
        imageUrl &&
        imageUrl.startsWith("//")
      ) {
        imageUrl = `https:${imageUrl}`;
      }

      const testimonial = {
        id: item.sys.id,

        Name: fields.name,

        testimonialText:
          fields.testimonialText,

        imageAltText:
          fields.imageAltText,

        image: imageUrl,

        sortOrder: fields.sortOrder,

        active: fields.active,
      };

      console.log(
        "Final testimonial:",
        testimonial
      );

      return testimonial;
    });

    console.log(
      "All testimonials:",
      testimonials
    );

    return NextResponse.json(
      testimonials
    );

  } catch (error) {
    console.error(
      "Contentful error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to fetch Contentful data please check",

        details:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}