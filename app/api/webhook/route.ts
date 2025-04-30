import { mercadopago } from "@/lib/api";
import { createClient } from "@supabase/supabase-js";
import { Payment } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body: { data: { id: string } } = await req.json();

    const paymentId = body.data.id;
    const payment = await new Payment(mercadopago).get({ id: paymentId });

    if (payment.status === "approved") {
      const metadata = payment.metadata;

      await supabase.from("payments").insert({
        client_id: metadata.clientId,
        guide_slug: metadata.guideSlug,
        amount: payment.transaction_amount,
        status: payment.status,
        preference_id: payment.external_reference
      });
    }

    return NextResponse.json(
      { received: true },
      {
        status: 200
      }
    );
  } catch (err) {
    console.error("Error en webhook", err);
    return new NextResponse("Webhook error", { status: 500 });
  }
}
