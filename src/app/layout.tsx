import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Restorer",
  description: "Restore Foto Lama Jadi Jernih dengan AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
