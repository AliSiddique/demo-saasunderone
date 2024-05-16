import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProviderContext from "@/components/SessionProviderContext";
import { Session } from "next-auth";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/Theme-Provider";
import { config } from "../../config";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.title}`,
    default: config.title, // a default is required when creating a template
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {
    google: config.googleVerification,
    yandex: config.yandexVerification,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.eu-central-1.aws.tinybird.co" data-token="p.eyJ1IjogIjJhNjU4MjMxLTI2ZDItNDkyNy05YTgwLTFmZDM5ODE2ODI2MyIsICJpZCI6ICJmMGVhNDQxMC0xOTY3LTRmZWEtODJhNy0wOTc4NWEyZjM1NWMiLCAiaG9zdCI6ICJhd3MtZXUtY2VudHJhbC0xIn0.A5JUa9HXhOM_O0T3l48fYZyiIDVd_odsUoIHYK9k-jM"></script>
        <GoogleAnalytics GA_TRACKING_ID={config.googleAnalyticsId} />
      </head>
      <body className={inter.className}>
        <Toaster position="top-right" />
        <SessionProviderContext>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProviderContext>
      </body>
    </html>
  );
}
