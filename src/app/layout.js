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
      <body className="max-w-4xl m-auto p-8 min-h-screen md:min-h-[50vh] flex flex-col">
        <div>
          <Navbar />
          <main className="mt-16">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
