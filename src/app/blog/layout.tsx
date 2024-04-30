import Navbar from "@/components/landing-page/Navbar/navbar";
import Footer from "@/components/landing-page/light-saas/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  );
}
