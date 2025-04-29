"use client";

import { PriceBadge } from "@/components/price-badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Download } from "lucide-react";
import { useState } from "react";

interface PaymentProps {
  price: number;
  bgColor: string;
  title: string;
}

export function Payment({ price, bgColor, title }: PaymentProps) {
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success"
  >("idle");

  const handlePayment = () => {
    setPaymentStatus("processing");

    // Simulación de procesamiento de pago
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2000);
  };

  if (paymentStatus === "success") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">¡Compra exitosa!</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Gracias por adquirir "{title}"
        </p>
        <Button className={`w-full ${bgColor} hover:opacity-90`}>
          <Download className="h-4 w-4 mr-2" />
          Descargar guía
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Precio</h3>
        <PriceBadge
          price={price}
          size="lg"
          showDiscount={price > 10}
          originalPrice={price > 10 ? price * 1.25 : undefined}
        />
      </div>

      <Button
        className={`w-full mb-4 ${bgColor} hover:opacity-90`}
        onClick={handlePayment}
        disabled={paymentStatus === "processing"}
      >
        {paymentStatus === "processing" ? (
          <>
            <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Procesando...
          </>
        ) : (
          <>
            <CreditCard className="h-4 w-4 mr-2" />
            Comprar ahora
          </>
        )}
      </Button>

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Pago seguro mediante MercadoPago.
      </div>
    </div>
  );
}
