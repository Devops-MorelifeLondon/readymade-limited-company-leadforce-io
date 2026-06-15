import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, contactNumber, email, country, message, pageURL } =
      await req.json();
console.log( fullName, contactNumber, email, country, message, pageURL)
    const formId = '252543224958462';

    if (!formId) {
      return NextResponse.json(
        { error: "Missing JotForm configuration" },
        { status: 500 }
      );
    }

    const params = new URLSearchParams();

    // ❗ Use YOUR REAL JotForm field names ok here
    params.append("q17_fullName", fullName);
    params.append("q22_ContactNumber", contactNumber);
    params.append("q7_email", email);
    params.append("q23_Country", country);
    params.append("q4_message4", message);

    // REQUIRED FIELD – MUST BE SENT
    params.append("q24_typeA", pageURL || "");


    // REQUIRED: formID must be included
    params.append("formID", formId);

  const jotformResponse = await fetch(
  `https://submit.jotform.com/submit/${formId}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": process.env.APP_URL || "https://lead-force.io",
    },
    body: params.toString(),
  }
);


    // Web submit returns HTML only → just check status
    if (jotformResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to submit form", details: "JotForm server error" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("JotForm submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
