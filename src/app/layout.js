import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata = {
  title: "Raymond Yang",
  description: "Raymond Yang portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-md m-auto">
        <Navbar />
        <main className="mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
