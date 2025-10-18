"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

interface WhatsappButtonProps extends ButtonProps {
  message: string;
}

// NOTE: In a real app, this should come from environment variables
const WHATSAPP_PHONE_NUMBER = "15551234567"; // Using a placeholder number

export function WhatsappButton({ message, children, ...props }: WhatsappButtonProps) {
  const handleInquiry = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button onClick={handleInquiry} {...props}>
      <WhatsAppIcon className="mr-2 h-5 w-5" />
      {children}
    </Button>
  );
}