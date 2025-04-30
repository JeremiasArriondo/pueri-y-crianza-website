import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const { clientId, guideSlug } = await req.json();

  const { data } = await supabase
    .from("payments")
    .select("id")
    .eq("client_id", clientId)
    .eq("guide_slug", guideSlug)
    .eq("status", "approved")
    .single();

  return NextResponse.json({ hasPaid: !!data });
}
