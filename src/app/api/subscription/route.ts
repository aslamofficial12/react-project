import { NextResponse } from "next/server";
import client from "../../../../lib/contentful";

export async function GET() {
  try {
    const response = await client.getEntries({
      content_type: "pageSubscription",
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
      id: item.sys.id,
      title: item.fields.title,
      titleParagraph: item.fields.titleParagraph,
      mainbanner: item.fields.mainbanner
        ? `https:${(item.fields.mainbanner as any).fields.file.url}`
        : null,
      termsApply: item.fields.termsApply,

      sectionTwoTitle: item.fields.sectionTwoTitle,

      sectionTwoImage4week: item.fields.sectionTwoImage4week
        ? `https:${(item.fields.sectionTwoImage4week as any).fields.file.url}`
        : null,

      sectionTwoImage4weekTitle: item.fields.sectionTwoImage4weekTitle,
      sectionTwoImage8weekTitle: item.fields.sectionTwoImage8weekTitle,

      sectionFourTitle: item.fields.sectionFourTitle,
      sectionFourSubTitle: item.fields.sectionFourSubTitle,

      loadingImage: item.fields.loadingImage
        ? `https:${(item.fields.loadingImage as any).fields.file.url}`
        : null,

      loyaltyImageTwo: item.fields.loyaltyImageTwo
        ? `https:${(item.fields.loyaltyImageTwo as any).fields.file.url}`
        : null,

      helpResourceImageOne: item.fields.helpResourceImageOne
        ? `https:${(item.fields.helpResourceImageOne as any).fields.file.url}`
        : null,

      helpResourceImageTwo: item.fields.helpResourceImageTwo
        ? `https:${(item.fields.helpResourceImageTwo as any).fields.file.url}`
        : null,

      helpResourceImageThree: item.fields.helpResourceImageThree
        ? `https:${(item.fields.helpResourceImageThree as any).fields.file.url}`
        : null,

      sectionFourSecondTitle: item.fields.sectionFourSecondTitle,
      listFieldOne: item.fields.listFieldOne ?? [],

      listFieldTwo:item.fields.listFieldTwo ??[],
      subscribeButton:item.fields.subscribeButton,
      loyaltyRewardTextSub:item.fields.loyaltyRewardTextSub ??[],

      loyaltyImageFour:item.fields.loyaltyImageFour
      ?`https:${(item.fields.loyaltyImageFour as any).fields.file.url}`
      :null,
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
