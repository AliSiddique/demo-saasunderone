interface Config {
  name: string;
  siteUrl: string;
  title: string;
  description: string;
  fromEmail: string;
  twitterHandle: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphUrl: string;
  opengraphSiteName: string;
  opengraphType: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterUrl: string;
  twitterCard: string;
  category: string;
  googleAnalyticsId: string;
  googleVerification: string;
  yandexVerification: string;
}
export const config = {
  name: "SaaS Under One",
  siteUrl: "https://demo.saasunderone.com",
  title: "SaaS Under One",
  description: "Example description",
  fromEmail: "noreply@capitalshouse.com",
  twitterHandle: "@saasunderone",
  opengraphTitle: "SaaS Under One",
  opengraphDescription:
    "SaaS Under One is a platform for building, launching, and scaling your SaaS business.",
  opengraphUrl: "https://demo.saasunderone.com",
  opengraphSiteName: "SaaS Under One",
  opengraphType: "website",
  twitterTitle: "SaaS Under One",
  twitterDescription:
    "SaaS Under One is a platform for building, launching, and scaling your SaaS business.",
  twitterImage: "/og.png",
  twitterUrl: "https://demo.saasunderone.com",
  twitterCard: "summary_large_image",
  category: "SAAS",
  googleAnalyticsId: "UA-123456789-0",
  googleVerification: "google",
  yandexVerification: "yandex",
} as Config;
