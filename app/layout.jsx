import localFont from "next/font/local";
const ArabicUI = localFont({ src: './fonts/DG-Gaza.ttf' })
const ArabicUI2 = localFont({ src: './fonts/LANTX.otf' })
const ArabicUI3 = localFont({ src: './fonts/Rubik.ttf' })
const ArabicUI4 = localFont({ src: './fonts/galaxy.ttf' })
const ArabicUI5 = localFont({ src: './fonts/laxr.ttf' })
import "./globals.css";


export const metadata = {
  title: "MNU Booking System",
  description: "Created By Kerlos Hany ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-universty   bg-cover  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

