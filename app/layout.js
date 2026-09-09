import "./globals.css";
import config from "@/data/config";

export const metadata = {
  title: `Thiệp cưới ${config.groom.short} & ${config.bride.short}`,
  description: config.wedding.invitation,
  openGraph: {
    title: `${config.groom.name} & ${config.bride.name}`,
    description: config.wedding.invitation,
    images: [config.heroImage],
  },
};

export const viewport = {
  themeColor: "#faf5ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&family=Dancing+Script:wght@500;600;700&family=Sacramento&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap&subset=vietnamese"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&text=%E5%9B%8D&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
