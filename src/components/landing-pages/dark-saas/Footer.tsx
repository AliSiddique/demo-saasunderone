import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-start justify-start gap-8 w-full h-[100%] overflow-y-auto relative overflow-x-hidden bg-black">
      <div className="flex flex-col items-start justify-start w-full p-5 sm:p-10 m-auto max-w-full lg:max-w-7xl gap-8">
        <div className="flex items-start justify-between w-full h-full gap-12 lg:gap-28 lg:flex-row flex-col">
          <h1 className="text-2xl font-bold">Zen.</h1>
          <div className="flex items-start justify-between w-full h-full gap-8 flex-wrap">
            {links.map((link, index) => (
              <div className="flex flex-col items-start gap-4" key={index}>
                <h3 className="text-lg font-bold">{link.title}</h3>
                <ul className="flex flex-col items-start gap-3">
                  {link.links.map((link, index) => (
                    <Link
                      href={link.url}
                      key={index}
                      className="hover:underline"
                    >
                      <li className="text-sm font-medium text-white/80">
                        {link.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[.5px] bg-slate-400/50"></div>
        <div className="w-full flex items-center justify-between gap-4 md:flex-row flex-col">
          <div className="flex items-center gap-4">
            <p className="text-sm font-light text-white/60">© 2023</p>
            <Link href="/terms" className="hover:underline">
              <p className="text-sm font-light text-white/60">Terms</p>
            </Link>
            <Link href="/privacy" className="hover:underline">
              <p className="text-sm font-light text-white/60">Privacy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

interface LinkTags {
  label: string;
  url: string;
}
interface Link {
  title: string;
  links: LinkTags[];
}
const links = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        url: "/features",
      },
      {
        label: "Pricing",
        url: "/pricing",
      },
      {
        label: "Integrations",
        url: "/integrations",
      },
      {
        label: "Security",
        url: "/security",
      },
      {
        label: "Enterprise",
        url: "/enterprise",
      },
      {
        label: "Customer Stories",
        url: "/customers",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        url: "/about",
      },
      {
        label: "Blog",
        url: "/blog",
      },
      {
        label: "Careers",
        url: "/careers",
      },
      {
        label: "Contact",
        url: "/contact",
      },
      {
        label: "Press",
        url: "/press",
      },
      {
        label: "Partners",
        url: "/partners",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Help Center",
        url: "/help",
      },
      {
        label: "API Documentation",
        url: "/api",
      },
      {
        label: "Status",
        url: "/status",
      },
      {
        label: "Changelog",
        url: "/changelog",
      },
      {
        label: "Brand Assets",
        url: "/brand",
      },
      {
        label: "Legal",
        url: "/legal",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        url: "/privacy",
      },
      {
        label: "Terms of Service",
        url: "/terms",
      },
      {
        label: "Data Processing",
        url: "/dpa",
      },
      {
        label: "Cookie Policy",
        url: "/cookies",
      },
      {
        label: "GDPR",
        url: "/gdpr",
      },
      {
        label: "CCPA",
        url: "/ccpa",
      },
      {
        label: "Sitemap",
        url: "/sitemap",
      },
    ],
  },
] satisfies Link[];
