import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/provider";

export const metadata: Metadata = {
  title: "🎃 stash",
  description: "share your post now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
