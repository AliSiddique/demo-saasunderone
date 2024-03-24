import LandingPageOne from "@/components/landing-pages/light-saas/LandingPageOne";
import LandingPageTwo from "@/components/landing-pages/dark-saas/LandingPageTwo";
import { config } from "../../config";
export const metadata = {
  title: "Home",
  description: "Home Page",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: config.opengraphTitle,
    description: config.opengraphDescription,
    url: config.siteUrl,
    siteName: config.opengraphSiteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.twitterTitle,
    description: config.twitterDescription,
    creator: config.twitterHandle,
  },
  category: config.category,
};
export default function page() {
  return <LandingPageTwo />;
}
