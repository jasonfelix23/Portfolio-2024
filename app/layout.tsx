"use client"
import { Raleway, Fira_Code } from "next/font/google";
import '@/app/scss/index.scss'

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <style jsx global>{`
      :root{
        --raleway: ${raleway.style.fontFamily};
        --fira-code: ${firaCode.style.fontFamily};
      }
      `
        
        }</style>
      <body >{children}</body>
    </html>
  );
}
