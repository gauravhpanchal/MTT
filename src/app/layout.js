"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import QuickEnquiryButton from "@/components/QuickEnquiryButton";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Maharashtra Tours Travels",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <html lang="en">
      <head>
        <title>Maharashtra Tours Travels</title>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div>{children}</div>
        <QuickEnquiryButton
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      </body>
    </html>
  );
}
