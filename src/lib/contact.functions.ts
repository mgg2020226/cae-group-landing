import { createServerFn } from "@tanstack/react-start";

export type ContactInfo = {
  whatsapp: string;
  email: string;
  address: string;
};

export const getContactInfo = createServerFn({ method: "GET" }).handler(
  async (): Promise<ContactInfo> => {
    return {
      whatsapp: process.env.WHATSAPP_NUMBER ?? "573001966177",
      email: process.env.CONTACT_EMAIL ?? "info@caegroup.com",
      address: process.env.CONTACT_ADDRESS ?? "Barranquilla, Colombia",
    };
  },
);
