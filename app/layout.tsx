import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog – Atividades Python",
  description: "Blog para postar atividades e códigos de Python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* NAVBAR */}
        <header
          style={{
            background: "white",
            borderBottom: "1px solid #e5e5e5",
            padding: "14px 0",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: "0 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="/" style={{ fontWeight: 600, fontSize: 20 }}>
              Blog Python
            </a>


          </div>
        </header>

        {/* MAIN */}
        <main
          style={{
            maxWidth: 760,
            margin: "40px auto",
            padding: "0 16px",
          }}
        >
          {children}
        </main>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 60,
            textAlign: "center",
            padding: 20,
            fontSize: 14,
            color: "#555",
          }}
        >
          © {new Date().getFullYear()} – Blog Atividades Python
        </footer>

      </body>
    </html>
  );
}
