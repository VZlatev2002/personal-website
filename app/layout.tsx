import Link from "next/link";
import "../styles/globals.css";
import { Navbar } from './components/Navbar';
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // my = mt-6 and mb-6 (margin top, margin bottom)
    const header = (
      <header>
        <div className="text-center p-6 my-5 mx-30 rounded-lg text-customHeading">
          <Link href="/">
            <h1 className="font-bold mt-4 hover:underline text-base">Velizar Zlatev</h1>
          </Link>
          <Link href="/">
            <h1 className="font-bold mt-4 hover:underline text-base">(Велизар Златев)</h1>
          </Link>
        </div>
      </header>
    );
  

    const footer = (
      <footer>
        <div className="border-t border-solid mt-6 py-6 text-center text-customHeading">
          {/* <p className="text-sm text-left"></p> */}
        </div>
      </footer>
    );

    return (
    <html className="font-poppins min-h-screen">
        <Analytics/>
        <head/>
        <body className="flex">
        <div className="pt-4 pl-5">
          <div>
            {header}
          </div>
          <div className="nav">
            <Navbar/>
          </div>
        </div>
        <div className="mx-auto max-w-2xl pt-28 flex-grow">
          <div className="bg-customSubBG">
            {children}
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}

  