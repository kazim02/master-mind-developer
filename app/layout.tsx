import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master Mind Developer | Academic & Professional Services",
  description:
    "Affordable academic and professional document services for students, job seekers and working professionals in Pakistan.",
  applicationName: "Master Mind Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
