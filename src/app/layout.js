import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title:
    "طراحی سایت اختصاصی، سئو سایت، طراحی سایت با وردپرس | وبدیتو - WebDito",
  description:
    "طراحی سایت اختصاصی و وردپرسی با وبدیتو, با کیفیت ترین خدمات طراحی سایت در ایران.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
