import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2024-10-05",
  dataset: "production",
  projectId: "lnb9t2na",
  useCdn: false,
});

// Function to convert the queried sanity image object to a url.
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
