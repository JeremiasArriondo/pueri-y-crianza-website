import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

export async function POST(req: NextRequest) {
  try {
    const { title, price, guideSlug, clientId } = await req.json();

    const response = await new Preference(mercadopago).create({
      body: {
        items: [
          {
            id: guideSlug,
            title,
            quantity: 1,
            unit_price: price,
            currency_id: "ARS"
          }
        ],
        metadata: {
          guideSlug,
          clientId
        }
      }
    });

    console.log({ response });

    return NextResponse.json({ id: response.id });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    return new NextResponse("Error al crear la preferencia", { status: 500 });
  }
}
