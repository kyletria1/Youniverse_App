import "./globals.css";
import { Poppins, Fredoka, Pixelify_Sans } from "next/font/google";

export const metadata = {
  title: "Youniverse",
  description: "Youniverse is a productivity based virtual pet app designed for working towards dreams and or long term beneficial goals",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
  variable: "--font-poppins",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "500", "400", "300"],
  variable: "--font-fredoka",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["600", "500", "400"],
  variable: "--font-pixelify",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${fredoka.variable} ${pixelify.variable}`}>
        <main className="screen screen--fullscreen">
          {children}
        </main>
      </body>
    </html>
  );
}