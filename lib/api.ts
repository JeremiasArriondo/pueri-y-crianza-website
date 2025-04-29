import { MercadoPagoConfig, Preference } from "mercadopago";

interface Message {
  id: number;
  text: string;
}

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

const api = {
  message: {
    async add(message: Message): Promise<void> {
      console.log("ADD ");
    },
    async submit(text: Message["text"]) {
      const preference = await new Preference(mercadopago).create({
        body: {
          items: [
            {
              id: "message",
              unit_price: 100,
              quantity: 1,
              title: "Mensaje nuevo"
            }
          ],
          metadata: {
            text
          }
        }
      });

      return preference.init_point;
    }
  }
};

export default api;
