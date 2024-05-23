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
      <body className="max-w-screen-md m-auto p-8">
        <Navbar />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
