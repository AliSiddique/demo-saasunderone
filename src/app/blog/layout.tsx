
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/landing-page/Navbar";
import getCurrentUser from "@/lib/User";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser()
  return (
    <div>
        <Navbar user={user} />
        {children}
        <Footer />
    </div>
  );
}
