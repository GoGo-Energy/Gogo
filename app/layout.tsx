import "./globals.css";
import ResponsiveAppBar from "./navbar/page";
import Footer from "./footer/page";

export const metadata = {
  title: "Gogo Energy",
  description:
    "Revolutionizing the way you ride with sustainable energy solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Revolutionizing the way you ride with sustainable energy solutions."
        />
        <meta
          name="keywords"
          content="Gogo Energy, electric vehicles, clean energy, sustainability"
        />
        <meta name="author" content="Gogo Energy" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Gogo Energy" />
        <meta
          property="og:description"
          content="Revolutionizing the way you ride with sustainable energy solutions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.gogoenergy.com" />
        <meta property="og:type" content="website" />

        <title>{metadata.title}</title>
      </head>
      <body>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
