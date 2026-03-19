import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        {
          success: false,
          error: "Database not configured",
          message: "MongoDB connection not available",
        },
        { status: 503 }
      );
    }

    const body = await request.json();

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and phone are required",
        },
        { status: 400 }
      );
    }

    const leadsCollection = await getCollection("Leads");

    const leadData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      productName: body.productName || "",
      categorySlug: body.categorySlug || "",
      productSlug: body.productSlug || "",
      dimensions: typeof body.dimensions === "string" ? body.dimensions : body.dimensions ?? "",
      requiredUnits: body.requiredUnits ?? null,
      details: body.details || "",
      source: body.source || "subdomain-landing",
      status: "new",
      submittedAt: new Date(body.submittedAt || new Date().toISOString()),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await leadsCollection.insertOne(leadData);

    return NextResponse.json({
      success: true,
      leadId: result.insertedId,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save lead",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
