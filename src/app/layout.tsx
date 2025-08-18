import { Sofia } from "next/font/google";

const sofia = Sofia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sofia",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${sofia.variable} bg-black`}>{children}</body>
        {/* <p className="text-gray-300 text-center">&copy; 2025</p> */}
      </html>

    </>
  );
}
