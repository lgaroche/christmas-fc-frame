import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: 'Is it Christmas?',
    openGraph: {
      images: [`${process.env['HOST']}/opengraph-image`]
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:post_url": `${process.env['HOST']}/api`,
      "fc:frame:image": `${process.env['HOST']}/opengraph-image?t=${Date.now()}`,
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
