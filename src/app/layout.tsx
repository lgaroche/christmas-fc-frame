import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: 'Is it Christmas?',
    openGraph: {
      images: ["/opengraph-image"]
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:post_url": "/",
      "fc:frame:image": "/opengraph-image",
      "fc:frame:button:1": "Check again"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
