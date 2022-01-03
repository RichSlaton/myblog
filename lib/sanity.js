import sanityClient from "@sanity/client";


export default sanityClient({
  dataset: "production",
  projectId: "4rosulty",
  useCdn: process.env.NODE_ENV === "production",
});
