import { Inter } from "next/font/google";
import { ProductContextProvider } from "./context/Context";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "V Cell",
  description: "Hello There",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <ProductContextProvider>
            <Navbar />
            {children}
          </ProductContextProvider>
        </Theme>
      </body>
    </html>
  );
}
