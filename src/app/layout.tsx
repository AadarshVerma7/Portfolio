import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Cinzel, Rubik_Wet_Paint } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald"
})

const conzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel"
})

const graffiti = Rubik_Wet_Paint({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AV | Resume",
  description: "This is a resume of Aadarsh Verma :)",
  icons:{
    icon:"/images/LOGO.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${conzel.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,

            style: {
              background: "rgba(5, 7, 6, 0.96)",
              border: "1px solid rgba(214, 176, 111, 0.35)",
              color: "#e7dcc6",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.55)",
              backdropFilter: "blur(12px)",
            },

            classNames: {
              title:
                "text-[#d6b06f] uppercase tracking-[0.12em] text-xs",

              description:
                "text-zinc-500 text-xs",
            },
          }}
        />
      </body>
    </html>
  );
}
