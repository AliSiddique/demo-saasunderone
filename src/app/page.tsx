import getCurrentUser from "@/lib/User";
import { config } from "../../config";
import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import Feature from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
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
export default async function page() {
  const user = await getCurrentUser();
  return (
    <>
    <Navbar user={user} />
    <Hero />
    <Feature />
    <Footer />
    </>
  )
}
