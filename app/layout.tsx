import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/sharedlayout/nav";
import Footer from "@/sharedlayout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pay me",
  description: "pay landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" pt-2 flex flex-col ">
        <div className="w-full nav-children">
          <Nav />
          <div className="mt-0 w-full">{children}</div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
