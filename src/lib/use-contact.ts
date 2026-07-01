import { getRouteApi } from "@tanstack/react-router";
import type { ContactInfo } from "./contact.functions";

const rootApi = getRouteApi("__root__");

export function useContact(): ContactInfo {
  return rootApi.useLoaderData();
}

export function buildWaUrl(whatsapp: string, text: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
}
