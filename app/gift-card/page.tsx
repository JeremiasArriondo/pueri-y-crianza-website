import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gift card - Meel Pueri",
  description: "Website Melanie Reynoso - Puericultora"
};

export default function GiftCard() {
  return (
    <>
      <main className={"min-h-screen mx-4 pt-4"}>
        <h1 className="text-xl text-violetSecondary mb-4">
          Regalá un Gift Card
        </h1>
        <Image
          src={"/images/gift-card.jpeg"}
          alt="Gif card para regalar a quien quieras"
          className="rounded-2xl"
          width={500}
          height={0}
        />
        <div className="my-4">
          <h3>
            Si tu deseo es regalar a alguien una consulta conmigo para despejar
            dudas, para atender temas de lactancia, para lo que pueda ser útil,
            entonces compra una gift card y regalasela a quien la necesite.
          </h3>
          <a
            href="https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quiero%20una%20GIFT%20CARD"
            className="underline text-violetSecondary"
          >
            Quiero una Gift Card
          </a>
        </div>
      </main>
    </>
  );
}
